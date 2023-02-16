import React from "react";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,
} from "reactstrap";

export default function FAQAccordions() {
  return (
    <>
      <br />
      <br />
      <h4 className="faq-heading">
        <b>
          <font color style={{ color: "black!important" }}>
            Frequently Asked Questions
          </font>
        </b>
      </h4>
      <div
        className="faq-accordion"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <UncontrolledAccordion
          defaultOpen={[]}
          stayOpen
          style={{ width: "100%" }}
        >
          <AccordionItem>
            <AccordionHeader targetId="1">
              Who is the Developer of FloraCity Ecopolis?
            </AccordionHeader>
            <AccordionBody accordionId="1">
              <p>
                FloraHomes Global Consult Ltd., a property verification and real
                estate development company located at Suit 6, Umudi Mall, KM 50,
                Lekki-Epe Expressway, Lagos.
              </p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2">
              Where's the project location?{" "}
            </AccordionHeader>
            <AccordionBody accordionId="2">
              <p>
                Beside Lekki Free Trade Zone, Lagos, Nigeria. Just type
                <strong>
                  {" "}
                  <u>FLORACITY ECOPOLIS</u>
                </strong>{" "}
                on Google Map OR Google Earth.
              </p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3">
              What title document is on the property?
            </AccordionHeader>
            <AccordionBody accordionId="3">
              <p>
                An official Lagos State Gazette; No.38 in Vol.27 dated the 27th
                day of October, 1994.
              </p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="4">
              What are the major differences between the partnership types
            </AccordionHeader>
            <AccordionBody accordionId="4">
              <p>
                One-Off = Gets a 1 time resell profit 12 months after the
                project commencement date.
              </p>
              <p>
                Annual = Gets yearly recurrent rental income after the delivery
                of the entire project.
              </p>
              <p>
                Sole-ownership = Have the apartment(s) fully and can use it for
                whatever he/she wishes.
              </p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="5">
              What's the duration of partnership?
            </AccordionHeader>
            <AccordionBody accordionId="5">
              <p>
                A. For One-off = 6 months from the day of Phase 1 completion.
              </p>
              <p>
                B. For Annual Rental ROI = Life Time From the Day of Project
                Completion.
              </p>
              <p>
                For Sole-ownership = Partner owns the apartment fully once the
                company delivers the apartment(s) and its facilities.
              </p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="6">
              What is the project duration?
            </AccordionHeader>
            <AccordionBody accordionId="6">
              <p>Phase 1 = 6 months.</p>
              <p>Total Project Phases = 24 months.</p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="7">
              Slot or Unit of what exactly will I be owning?
            </AccordionHeader>
            <AccordionBody accordionId="7">
              <p>
                1 Bedroom Flat = Equitable slot(s) from a total of 140 slots
                within a block of 1 bedroom flat.
              </p>
              <p>
                1 Bedroom Duplex = Equitable slot(s) from a total of 45 slots
                within a block of 1 bedroom duplex.
              </p>
              <p>Sole-Owner = unit(s) of any of the apartment types.</p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="8">
              Can a person own slots from both the 1 bedroom apartment and the
              Mezzanine? and how many slots can a person own?
            </AccordionHeader>
            <AccordionBody accordionId="8">
              <p>A person can own slots from both apartment types.</p>
              <p>
                Requirement is minimum of 1 slot, a maximum of 5 total slots per
                person or the sole-ownership of the flat and/or the duplex
                unit(s).
              </p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="9">
              Can my slot of annual rentals be transferred to my beneficiary in
              case of demise?
            </AccordionHeader>
            <AccordionBody accordionId="9">
              <p>
                Yes. Either one-off profit or annual rental profit, all profits
                and/or benefits would be transferred to your Next of Kin or
                anyone the partner has mentioned prior to his/her demise.
              </p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="16">
              Can I seek refund after I've Made Payment
            </AccordionHeader>
            <AccordionBody accordionId="16">
              <p>
                Paying for any number of apartment slot(s) and/or units
                constitutes a complete purchase of equitable property allotment
                and the buyer can only get a capital refund after the sale of
                such property. All capital refund attracts a 10% Management fee
                at all times.
              </p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="17">
              Can I Pay to Your Consultant / Marketer?{" "}
            </AccordionHeader>
            <AccordionBody accordionId="17">
              <p>
                No! All payments should be made only to our company official
                account.
              </p>
              <ul className="list-style-one">
                <li>Bank Name: Jaiz Bank</li>
                <li>Acc. Name: FloraHomes Global Consult Ltd.</li>
                <li>Naira: 0007101193</li>
                <li>Dollar: 0007101210</li>
              </ul>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="10">
              Are the One-Off 12 months resell profit and yearly rental PROFITS
              as shown in this Brochure absolute?
            </AccordionHeader>
            <AccordionBody accordionId="10">
              <p>
                No. It is not absolute. Even though the quoted profits are the
                existing reality and not exaggerations, yet, the profits
                mentioned are only based on projected calculations. The actual
                profit is usually based on percentage (%) equity share of the
                Current Market Value as well as the Going Rate per time of both
                property sales and rentals and this value can either be less or
                more than the projected amount stated on this brochure.
              </p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="11">
              Can I sell my slot of the Annual Rental investment after some time
              may be 5 -10years?
            </AccordionHeader>
            <AccordionBody accordionId="11">
              <p>
                No. Except where the number of partners interested in selling
                their slots makes the total sellable slots equate to an
                apartment. Only apartment(s) can be sold, not slot(s).
              </p>
              <p>
                Or where the project trustees decide on selling the apartments
                and distributing equity profits to the partners for the benefit
                of all.
              </p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="12">
              Am I getting any document for my purchase? If yes, what
              document(s) am I getting?
            </AccordionHeader>
            <AccordionBody accordionId="12">
              <p>Yes, you'll get documents.</p>
              <p>
                For Co-ownership = Purchase Receipt and Deed of Partnership.
              </p>
              <p>
                For sole-ownership of flat or duplex = Purchase Receipt,
                Contract of Sale, Blue and Record Copy Survey, Signed copy of
                Form 1C and a Deed of Assignment.
              </p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="13">
              Is this partnership secured?
            </AccordionHeader>
            <AccordionBody accordionId="13">
              <p>
                The project team are finely-sorted experienced and qualified
                professionals only.
              </p>
              <p>
                In case of unforeseen situation, project is insured with Jaiz
                Takaful Insurance Plc.
              </p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="14">
              Even though it's a partnership that doesn't require my presence,
              can I be allowed to inspect the site at any time to check for
              progress?
            </AccordionHeader>
            <AccordionBody accordionId="14">
              <p>
                Yes, you can. Just ensure you book your appointments 48 hours
                ahead then find your way to our office, and you'll be allowed
                for inspection. And if you have difficulty getting our office
                location, you can always contact our FloraCare for description.
              </p>
              <p>
                Aside this, project progress will always be updated to the
                partners’ private group which you'll be added to, right after
                your payment.
              </p>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="15">
              If I'm ready to buy my slot/unit now, what is the next step?
            </AccordionHeader>
            <AccordionBody accordionId="15">
              <p>
                Fill the reservation form, Receive the slot/unit Confirmation
                details, Make your payment and receive your documents in 3
                working days of payment.
              </p>
              <p>
                PS: Only payments confirms reservation. We do not keep slot/unit
                for anyone as we have very few left and they will be alloted on
                first come first served basis only. This is in order to meet up
                with the project completion date. Thereafter, there will be NO
                longer ONE-OFF PROFIT partnership, and all others will be sold
                at the new upwardly reviewed prices. Thank you for your
                understanding and see you at the other side.
              </p>
            </AccordionBody>
          </AccordionItem>
        </UncontrolledAccordion>
      </div>
    </>
  );
}
