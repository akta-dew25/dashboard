import React from "react";
// import "./content.css";
import { Row, Col, Card, Progress, Select } from "antd";
import totalOrderImg from "../Images/checkout (1).png";
import totalDelivered from "../Images/order.png";
import totalCancel from "../Images/cancel.png";
import totalRevenue from "../Images/capital.png";
import CustomerDetailsTable from "./customerDetailsTable";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  RightCircleFilled,
} from "@ant-design/icons";
import BarChart from "./barChart";
import Dish from "../Images/dish.png";
import Target from "../Images/target (1).png";
import Menus from "../Images/menu.png";
import CustomerFeedback from "./customerFeedback";

function Content() {
  return (
    <div className="content-div">
      <h2 className="dashboardLabel">Dashboard</h2>

      <Row gutter={[16, 12]} className="content-row">
        <Col md={16} sm={22} xs={24}>
          <Row gutter={[12, 12]}>
            <Col md={6} sm={24} xs={24}>
              <Card hoverable className="small-card">
                <img
                  src={totalOrderImg}
                  alt="total-order"
                  width={50}
                  height={50}
                  className="totalOrder-img"
                />
                <p className="card-text">Total Orders</p>
                <div className="number-div">
                  <p className="card-num">75</p>
                  <p className="card-num">
                    <CaretUpOutlined
                      style={{
                        color: "#2176f3",
                        fontSize: "14px",
                        marginLeft: "5px",
                      }}
                    />
                    <span style={{ fontSize: "12px", color: "#2176f3" }}>
                      3%
                    </span>
                  </p>
                </div>
              </Card>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <Card hoverable className="small-card">
                <img
                  src={totalDelivered}
                  alt="total-delivered"
                  width={50}
                  height={50}
                  className="totalDelivered-img"
                />
                <p className="card-text">Total Delivered</p>
                <div className="number-div">
                  <p className="card-num">70</p>
                  <p className="card-num">
                    <CaretUpOutlined
                      style={{
                        color: "#06dd0e",
                        fontSize: "14px",
                        marginLeft: "5px",
                      }}
                    />
                    <span style={{ fontSize: "12px", color: "#06dd0e" }}>
                      3%
                    </span>
                  </p>
                </div>
              </Card>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <Card hoverable className="small-card">
                <img
                  src={totalCancel}
                  alt="total-cancel"
                  width={50}
                  height={50}
                  className="totalCancel-img"
                />
                <p className="card-text">Total Cancelled</p>
                <div className="number-div">
                  <p className="card-num">07</p>
                  <p className="card-num">
                    <CaretDownOutlined
                      style={{
                        color: "#f02111",
                        fontSize: "14px",
                        marginLeft: "5px",
                      }}
                    />
                    <span style={{ fontSize: "12px", color: "#f02111" }}>
                      3%
                    </span>
                  </p>
                </div>
              </Card>
            </Col>
            <Col md={6} sm={24} xs={24}>
              <Card hoverable className="small-card">
                <img
                  src={totalRevenue}
                  alt="total-revenue"
                  width={50}
                  height={50}
                  className="totalRevenue-img"
                />
                <p className="card-text">Total Revenue</p>
                <div className="number-div">
                  <p className="card-num">$12K</p>
                  <p className="card-num">
                    <CaretUpOutlined
                      style={{
                        color: "#f5ba08",
                        fontSize: "14px",
                        marginLeft: "5px",
                      }}
                    />
                    <span style={{ fontSize: "12px", color: "#f5ba08" }}>
                      3%
                    </span>
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={8} sm={24} xs={24}>
          <Card hoverable className="nonProfit-card">
            <Row>
              <Col md={15} sm={24} xs={24}>
                <p style={{ margin: "0", fontSize: "13px", fontWeight: "600" }}>
                  Not Profit
                </p>
                <h1 style={{ margin: "8px 0px" }}>$6759.25</h1>
                <p className="card-num">
                  <CaretUpOutlined
                    style={{
                      color: "#f5ba08",
                      fontSize: "14px",
                      marginLeft: "5px",
                    }}
                  />
                  <span style={{ fontSize: "12px", color: "#f5ba08" }}>3%</span>
                </p>
              </Col>
              <Col md={9} sm={24} xs={24}>
                <Progress
                  type="circle"
                  percent={70}
                  strokeWidth={12}
                  size={[90]}
                  style={{ marginTop: "12px" }}
                  className="progessBar"
                />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={16} sm={22} xs={24}>
          <Card hoverable className="nonProfit-card">
            <div className="barChart-div">
              <h3 style={{ margin: "0" }}>Activity</h3>
              <Select
                defaultValue="weekly"
                className="select-dropdowm"
                //   onChange={handleChange}
                options={[
                  {
                    value: "weekly",
                    label: "Weekly",
                  },
                  {
                    value: "monthly",
                    label: "Monthly",
                  },
                  {
                    value: "half-yearly",
                    label: "Half Yearly",
                  },
                  {
                    value: "yearly",
                    label: "Yearly",
                  },
                ]}
              />
            </div>
            <BarChart />
          </Card>
        </Col>
        <Col md={8} sm={24} xs={24}>
          <Card hoverable className="nonProfit-card">
            <Row gutter={[0, 7]}>
              <Col md={24} sm={24} xs={24}>
                <Row gutter={16}>
                  <Col md={5} sm={5} xs={5}>
                    <img src={Target} alt="target" className="target-image" />
                  </Col>
                  <Col md={16} sm={16} xs={16} style={{ marginTop: "15px" }}>
                    <span
                      style={{
                        textAlign: "center",

                        fontWeight: "700",
                      }}
                    >
                      Goals
                    </span>
                  </Col>
                  <Col md={3} sm={3} xs={3} style={{ marginTop: "15px" }}>
                    <RightCircleFilled
                      style={{
                        color: "#607D8B",
                        fontSize: "18px",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={24} sm={24} xs={24}>
                <Row gutter={16}>
                  <Col md={5} sm={5} xs={5}>
                    <img src={Dish} alt="dish" className="dishes-image" />
                  </Col>
                  <Col md={16} sm={16} xs={16} style={{ marginTop: "15px" }}>
                    <span
                      style={{
                        textAlign: "center",
                        marginTop: "15px",
                        fontWeight: "700",
                      }}
                    >
                      Popular Dishes
                    </span>
                  </Col>
                  <Col md={3} sm={3} xs={3} style={{ marginTop: "15px" }}>
                    <RightCircleFilled
                      style={{
                        color: "#607D8B",
                        fontSize: "18px",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
              <Col md={24} sm={24} xs={24}>
                <Row gutter={16}>
                  <Col md={5} sm={5} xs={5}>
                    <img src={Menus} alt="menus" className="menus-image" />
                  </Col>
                  <Col md={16} sm={16} xs={16} style={{ marginTop: "15px" }}>
                    <span
                      style={{
                        textAlign: "center",
                        marginTop: "15px",
                        fontWeight: "700",
                      }}
                    >
                      Menus
                    </span>
                  </Col>
                  <Col md={3} sm={3} xs={3} style={{ marginTop: "15px" }}>
                    <RightCircleFilled
                      style={{
                        color: "#607D8B",
                        fontSize: "18px",
                      }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={16} sm={22} xs={24}>
          <Card hoverable className="nonProfit-card">
            <h3 style={{ margin: "0", paddingBottom: "10px" }}>
              Recent Orders
            </h3>
            <CustomerDetailsTable />
          </Card>
        </Col>
        <Col md={8} sm={24} xs={24}>
          <Card hoverable className="nonProfit-card">
            <h3 style={{ margin: "0", marginBottom: "10px" }}>
              Customer's Feedback
            </h3>
            <CustomerFeedback />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Content;
