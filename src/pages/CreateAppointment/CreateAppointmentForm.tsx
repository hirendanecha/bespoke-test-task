import {
  Col,
  DatePicker,
  Form,
  InputNumber,
  Row,
  TimePicker,
} from "antd";
import { DatePickerProps, RangePickerProps } from "antd/lib/date-picker";
import moment from "moment";

import React, { FC, ReactNode, useState } from "react";
import {
  ButtonWrapper,
  CancelButton,
  FormLabel,
  FormLabelDescription,
  PrimaryButton,
} from "./styles";

type CreateAppointmentFormProps = {
  children?: ReactNode;
  tabKey?: string;
};

const getTimeStops = (start: moment.Moment, end: moment.Moment) => {
  let startTime = moment(start, "HH:mm").clone();
  let endTime = moment(end, "HH:mm").clone();

  if (endTime.isBefore(startTime)) {
    endTime.add(1, "day");
  }

  let timeStops = [];

  while (startTime.isSameOrBefore(endTime)) {
    timeStops.push(moment(startTime).format("HH:mm"));
    startTime.add(15, "minutes");
  }
  timeStops.push(moment(startTime).format("HH:mm"));
  startTime.add(15, "minutes");

  return timeStops;
};

const CreateAppointmentForm: FC<CreateAppointmentFormProps> = (props) => {
  const [form] = Form.useForm();
  const [slots, setSlots] = useState<string[]>([]);

  const manageSeatHandler = (values: any) => {
    const slots = [
      ...getTimeStops(values.time[0], values.time[1].add(15, "minutes")),
    ];

    let capacity = Math.floor(values?.capacity / (slots?.length - 1));
    let slotBlock = [];
    for (let i = 0; i < slots.length - 1; i++) {
      let modCheck = (i + values?.capacity) % (slots.length - 1);

      if (modCheck === 0 && i !== 0) {
        capacity += 1;
      }
      // eslint-disable-next-line no-loop-func
      // setSlots((slot) => [
      //   ...slot,
      //   `${slots[i]} - ${slots[i + 1]} => ${capacity}`,
      // ]);
      slotBlock.push(`${slots[i]} - ${slots[i + 1]} => ${capacity}`);
      console.log(`${slots[i]} - ${slots[i + 1]} => ${capacity}`);
    }
    setSlots(slotBlock);
  };

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);

    manageSeatHandler(values);
  };

  const disabledDate: DatePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current < moment().startOf("day");
  };

  const range = (start: number, end: number) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  const disabledRangeTime: RangePickerProps["disabledTime"] = (_, type) => {
    const _current = _?.clone();
    if (
      moment.isMoment(form.getFieldValue("date")) &&
      _current
        ?.clone()
        ?.startOf("day")
        .isSame(form.getFieldValue("date").startOf("day"))
    ) {
      if (type === "start") {
        return {
          disabledHours: () => range(0, _current?.hours() || 0),
          disabledMinutes: (_h) =>
            range(
              0,
              _h > (_current?.hours() || 0) ? 0 : _current?.minutes() || 0
            ),
          disabledSeconds: (_h, _m) => [],
        };
      }
      return {
        disabledHours: () => range(0, _current?.hours() || 0),
        disabledMinutes: (_h) =>
          range(
            0,
            _h > (_current?.hours() || 0) ? 0 : _current?.minutes() || 0
          ),
        disabledSeconds: (_h, _m) => [],
      };
    } else {
      return {
        disabledHours: () => [],
        disabledMinutes: (_h) => [],
        disabledSeconds: (_h, _m) => [],
      };
    }
  };
  return (
    <>
      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        onFinish={onFinish}
      >
        <Row>
          <Col span={8}>
            <FormLabel>1. select date of appointment *</FormLabel>
            <FormLabelDescription>
              Please select the dates that you'd like to open up slots.
            </FormLabelDescription>
            <Form.Item
              name="date"
              rules={[{ required: true, message: "This is required" }]}
            >
              <DatePicker disabledDate={disabledDate} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <FormLabel>2. select The Hours *</FormLabel>
            <FormLabelDescription>
              Please select the Start and End Time.
            </FormLabelDescription>
            <Row>
              <Col span={12}>
                <Form.Item
                  name="time"
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <TimePicker.RangePicker
                    minuteStep={15}
                    format={"HH:mm"}
                    disabledTime={disabledRangeTime}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <FormLabel>3. Choose Seating Capacity *</FormLabel>
            <FormLabelDescription>
              Please enter total Seating Capacity.
            </FormLabelDescription>
            <Form.Item
              name="capacity"
              rules={[{ required: true, message: "This is required" }]}
            >
              <InputNumber
                formatter={(v: any) => Math.round(Math.abs(v)).toString()}
              />
            </Form.Item>
          </Col>
        </Row>
        <pre style={{ maxHeight: "250px" }}>{slots.map((s) => `${s}\n`)}</pre>
        <Form.Item>
          <ButtonWrapper>
            <CancelButton htmlType="reset" type="default">
              Cancel
            </CancelButton>
            <PrimaryButton htmlType="submit" type="primary">
              Create Slot
            </PrimaryButton>
          </ButtonWrapper>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateAppointmentForm;
