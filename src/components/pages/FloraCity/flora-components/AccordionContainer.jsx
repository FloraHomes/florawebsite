import React from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,
} from "reactstrap";

export default function AccordionContainer() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <UncontrolledAccordion
        defaultOpen={[]}
        stayOpen
        style={{ width: "100%" }}
      >
        <AccordionItem>
          <AccordionHeader targetId="1">
            <b> BREAKDOWN OF PROJECTED ONE-OFF RESELL PROFIT IN 12 MONTHS...</b>
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <ul className="list-style-one">
              <li>
                <strong>1 BEDROOM APARTMENT</strong>
                <p>
                  A fully finished and fitted 1 bedroom apartment together with
                  all the listed aforementioned facilities cost
                  <strong> N35m/Unit </strong>
                  currently. Once the apartment units are completed in 6 months,
                  prices will not be less than<strong> N52m </strong>based on
                  the rich facilities dedicated for these luxurious and premium
                  secured Eco-Communal apartments.
                </p>
                <p>
                  Assuming a 6 months buffer,
                  <strong> that's a minimum of 40% ROI in 1 year.</strong>
                </p>
              </li>
              <li>
                <strong> MEZZANINE APARTMENT</strong>
                <p>
                  A fully finished and fitted 1-bedroom duplex together with all
                  the listed aforementioned facilities cost
                  <strong> N45m/Unit </strong> currently. Once the apartment
                  units are completed in 6 months, prices will not be less than
                  <strong> N70m </strong> based on the rich facilities dedicated
                  for these luxurious and premium secured Eco-Communal
                  apartments.
                </p>
                <p>
                  Assuming a 6 months buffer,
                  <strong> that's a minimum of 50% ROI in 1 year.</strong>
                </p>
              </li>
            </ul>
            <strong style={{ color: "#000000" }}>
              Partners do not need to worry about the selling process. We have
              list of individual & corporate offtakers queueing to purchase it
              upon phase 1 completion.
            </strong>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            <b>
              BREAKDOWN OF PROJECTED ANNUAL RENTAL PROFIT - 1 BEDROOM FLAT...
            </b>
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <p style={{ color: "#000000" }}>
              {" "}
              Assuming daily shortlet of an average case scenario of a 60%
              Annual Occupancy Rate and a 40% Annual Vacancy Rate, that's{" "}
            </p>
            <strong style={{ color: "#000000" }}>
              219 nights out of 365 nights
            </strong>
            .
            <br />
            <p className="pt-2">
              Worse case scenario Rent of <strong>N80,000/ night </strong> per
              flat{" "}
            </p>
            <p>
              {" "}
              Gross Annual rental income= N80,000 × 219 nights= N 17,520,000{" "}
            </p>
            <p>Gross Annual Rental Income N17,520,000 </p>
            <p>less: Marketing N2,000,000 approx </p>
            <p> Maint. N1,500,000 approx. (3,500,000)</p>
            <p> Income= N 14,020,000</p>
            <ul className="list-style-one">
              <li>Profit sharing: 70% for investor: 30% Management</li>
              <li>Management Fee: 30% income= N4,206,000</li>
              <li>
                Annual Net Income== <strong>N9,814,000</strong>
              </li>
              <li>
                % Gross Annual Rental Income =17.52m/35m= 50.057% rental profit
              </li>
              <li>% Annual Net Income =9.814m/35m = 28% Profit Annually.</li>
            </ul>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">
            <b> BREAKDOWN OF PROJECTED ANNUAL RENTAL PROFIT - MEZZANINE...</b>
          </AccordionHeader>
          <AccordionBody accordionId="3">
            <p style={{ color: "#000000" }}>
              {" "}
              Assuming daily shortlet of an average case scenario of a 60%
              Annual Occupancy Rate and a 40% Annual Vacancy Rate, that's
            </p>
            <strong style={{ color: "#000000" }}>
              {" "}
              219 nights out of 365 nights.
            </strong>

            <br />
            <p className="pt-2">
              Worse case scenario Rent of <strong>N130,000/ night </strong> per
              duplex{" "}
            </p>
            <p>
              Gross Annual rental income= N130,000 × 219 nights= N 28,470,000
            </p>
            <p>Gross Annual Rental Income N 28,470,000</p>
            <p>less: Marketing N2,000,000 approx</p>
            <p>Maint. N2,000,000 approx. (4,000,000)</p>
            <p>Income= N 24,470,000</p>
            <ul className="list-style-one">
              <li>Profit sharing: 70% for investor: 30% Management</li>
              <li>Management fee: 30% of Income= N7,341,000</li>
              <li>
                Annual Net Income== <strong>N17,129,000</strong>
              </li>
              <li>
                % Gross Annual Rental Income =28.47m/45m={" "}
                <strong>63.266% rental profit</strong>
              </li>
              <li>
                % Annual Net Income = 15.596m/45m ={" "}
                <strong>38.06% Profit Annually.</strong>
              </li>
            </ul>
          </AccordionBody>
        </AccordionItem>
      </UncontrolledAccordion>
    </div>
  );
}
