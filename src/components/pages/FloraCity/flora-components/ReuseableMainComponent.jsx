import React from "react";

export default function ReuseableMainComponent({
  h1,
  span,
  headingParagraph,
  imageHeadline,
  image,
  li1,
  li2,
  isList = false,
  price,
  extraPrice,
}) {
  const mobileUl = isList && li2 ? [...li1, ...li2] : isList && !li2 ? li1 : [];
  return (
    <div className="homes-main-container">
      <div className="homes-details-container">
        <br />
        <div className="details-bottom-container">
          <h1 className="hr-green">
            <span className="big-font-label">{span}</span>
            {h1}
          </h1>
          <p className="heading-top-paragraph">{headingParagraph}</p>
          {isList && <h3>{imageHeadline}</h3>}
        </div>
        <img alt="relojhhg" src={image} />

        {isList ? (
          <div className="list-container">
            <ul className="list-style-one display-none">
              {li1.map((item, index) => (
                <li
                  className={index !== li1.length - 1 && "li-style"}
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
            {li2 && (
              <>
                <div
                  className="list-divider"
                  style={{
                    alignSelf: "flex-start",
                    width: "20px",
                    height: "50px",
                    marginTop: "5%",
                    backgroundColor: "#98b285",
                  }}
                />
                <ul className="list-style-one display-none">
                  {li2.map((item, index) => (
                    <li
                      className={index !== li2.length - 1 && "li-style"}
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <ul className="list-style-one mobile-ul">
              {mobileUl.map((item, index) => (
                <li
                  className={index !== mobileUl.length - 1 && "li-style"}
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="bottom-row">
            <p>{extraPrice}</p>
            <div>
              <p className="price-text">
                Price Now: <b>{price}</b>
              </p>
            </div>
            <p>Documentation: N2m</p>
          </div>
        )}
        <br />
      </div>
    </div>
  );
}
