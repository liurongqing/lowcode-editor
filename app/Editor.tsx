"use client";

import { Flex, Layout, Splitter } from "antd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Material, EditArea, Setting } from "./components";
const { Header, Content } = Layout;

export function Editor() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Layout className="h-screen">
        <Header>
          {/* <div className="text-white text-2xl">Logo</div> */}
          <Flex align="center" className="h-full text-white text-2xl">
            Logo
          </Flex>
        </Header>
        <Content>
          <Splitter>
            <Splitter.Panel collapsible defaultSize="240" min="200" max="300">
              <Material />
            </Splitter.Panel>
            <Splitter.Panel>
              <EditArea />
            </Splitter.Panel>
            <Splitter.Panel collapsible defaultSize="300" min="300" max="500">
              <Setting />
            </Splitter.Panel>
          </Splitter>
        </Content>
      </Layout>
    </DndProvider>
  );
}
