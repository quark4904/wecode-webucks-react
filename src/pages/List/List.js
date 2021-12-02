import React from "react";
import TopNav from "../Component/TopNav";
import "./List.scss";
import { Link } from "react-router-dom";
import CoffeeCard from "../Component/CoffeeCard";
import { ListDataCold, ListDataHot } from "./ListData";

function List() {
  return (
    <>
      <div className="List">
        <TopNav />
        <section>
          <div className="sectionDiv">
            <h1 className="coffeeType">콜드 브루 커피</h1>
            <p className="specialOffer">
              ☕디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </p>
          </div>
          <div className="coffeeImgsSection">
            {ListDataCold.map((data) => {
              return <CoffeeCard name={data.name} image={data.image} />;
            })}
          </div>
        </section>
        <section>
          <div className="sectionDiv">
            <h1 className="coffeeType">브루드 커피</h1>
            <p className="specialOffer">
              ☕디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </p>
          </div>
          <div className="coffeeImgsSection">
            {ListDataHot.map((data) => {
              return <CoffeeCard name={data.name} image={data.image} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default List;
