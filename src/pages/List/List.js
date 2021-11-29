import React from "react";
import TopNav from "./TopNav";
import "./List.scss";

function List() {
  return (
    <>
      <div className="List">
        <TopNav />
        <section>
          <div className="sectionDiv">
            <h1 className="coffeeType">콜드 브루 커피</h1>
            <p className="specialOffer">
              <i className="fas fa-mug-hot"></i>
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </p>
          </div>
          <div className="coffeeImgsSection">
            <div className="coffeeWithTitle">
              <div className="imgHover">
                <a className="coffeeDetail" href="detail.html">
                  <img
                    alt="화이트 초콜릿 모카"
                    src="/images/화이트 초콜릿 모카.jpeg"
                  />
                </a>
              </div>
              <p className="coffeeTitle">화이트 초콜릿 모카 🖤</p>
            </div>
            <div className="coffeeWithTitle">
              <div className="imgHover">
                <img
                  alt="나이트로 바닐라 크림"
                  src="/images/나이트로 바닐라 크림.jpeg"
                />
              </div>
              <p className="coffeeTitle">나이트로 바닐라 크림 🖤</p>
            </div>
            <div className="coffeeWithTitle">
              <div className="imgHover">
                <img
                  alt="나이트로 콜드 브루"
                  src="/images/나이트로 콜드 브루.png"
                />
              </div>
              <p className="coffeeTitle">나이트로 콜드 브루 🖤</p>
            </div>
            <div className="coffeeWithTitle">
              <div className="imgHover">
                <img alt="돌체 콜드 브루" src="/images/돌체 콜드 브루.jpeg" />
              </div>
              <p className="coffeeTitle">돌체 콜드 브루 🖤</p>
            </div>
            <div className="coffeeWithTitle">
              <div className="imgHover">
                <img
                  alt="바닐라 크림 콜드 브루"
                  src="/images/바닐라 크림 콜드 브루.jpeg"
                />
              </div>
              <p className="coffeeTitle">바닐라 크림 콜드 브루 🖤</p>
            </div>
            <div className="coffeeWithTitle">
              <div className="imgHover">
                <img
                  alt="벨벳 다크 모카 나이트로"
                  src="/images/벨벳 다크 모카 나이트로.jpeg"
                />
              </div>
              <p className="coffeeTitle">벨벳 다크 모카 나이트로 🖤</p>
            </div>
            <div className="coffeeWithTitle">
              <div className="imgHover">
                <img
                  alt="시그니처 더 블랙 콜드 브루"
                  src="/images/시그니처 더 블랙 콜드 브루.jpeg"
                />
              </div>
              <p className="coffeeTitle">시그니처 더 블랙 콜드 브루 🖤</p>
            </div>
            <div className="coffeeWithTitle">
              <div className="imgHover">
                <img
                  alt="제주 비자림 콜드 브루"
                  src="/images/제주 비자림 콜드 브루.jpeg"
                />
              </div>
              <p className="coffeeTitle">제주 비자림 콜드 브루 🖤</p>
            </div>
            <div className="coffeeWithTitle">
              <div className="imgHover">
                <img alt="콜드 브루" src="/images/콜드 브루.jpeg" />
              </div>
              <p className="coffeeTitle">콜드 브루 🖤</p>
            </div>
            <div className="coffeeWithTitle">
              <div className="imgHover">
                <img alt="콜드 브루 몰트" src="/images/콜드 브루 몰트.jpeg" />
              </div>
              <p className="coffeeTitle">콜드 브루 몰트 🖤</p>
            </div>
          </div>
        </section>
        <section>
          <div className="sectionDiv">
            <h1 className="coffeeType">브루드 커피</h1>
            <p className="specialOffer">
              <i className="fas fa-mug-hot"></i>
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </p>
          </div>
          <div className="coffeeImgsSection">
            <div className="coffeeWithTitle">
              <div className="imgHover">
                <img alt="아이스 커피" src="/images/아이스 커피.jpeg" />
              </div>
              <p className="coffeeTitle">아이스 커피 🖤</p>
            </div>
            <div className="coffeeWithTitle">
              <div className="imgHover">
                <img alt="오늘의 커피" src="/images/오늘의 커피.jpeg" />
              </div>
              <p className="coffeeTitle">오늘의 커피 🖤</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default List;
