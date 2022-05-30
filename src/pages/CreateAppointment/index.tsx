import { Tabs } from "antd";
import React, { useState } from "react";
import SemiHeader from "../../layouts/MainLayout/SemiHeader";
import CreateAppointmentForm from "./CreateAppointmentForm";
import {
  CreateAppointmentFormWrapper,
  MainCreateAppointmentWrapper,
  TabsWrapper,
} from "./styles";
const { TabPane } = Tabs;
const CreateAppointment = () => {
  const [selectedTabKey, setSelectedTabKey] = useState("1");
  return (
    <MainCreateAppointmentWrapper>
      <SemiHeader
        left={{ text: "Create Appointment slots" }}
        current="appointment-create"
      />
      <TabsWrapper>
        <Tabs
          type="card"
          activeKey={selectedTabKey}
          onChange={setSelectedTabKey}
        >
          <TabPane tab="Create Bulk 15 Min. Slots" key="1">
            <CreateAppointmentFormWrapper>
              <CreateAppointmentForm tabKey={selectedTabKey} />
            </CreateAppointmentFormWrapper>
          </TabPane>
          <TabPane tab="Create One Slots" key="2">
            <CreateAppointmentFormWrapper>
              <p>Content of Create One Slots</p>
            </CreateAppointmentFormWrapper>
          </TabPane>
        </Tabs>
      </TabsWrapper>
    </MainCreateAppointmentWrapper>
  );
};

export default CreateAppointment;
