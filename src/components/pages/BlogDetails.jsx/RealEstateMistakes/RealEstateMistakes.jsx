import React from "react";
import { Link } from "react-router-dom";
import Comment from "../Components/Comments/Comment";
import CommentForm from "../Components/Comments/CommentForm";
import Sidebar from "../Sidebar/Sidebar";
import blogheader from "../../../assets/blogheader.png";
import realestate from "../../../assets/realestate.png";
import re1 from "../../../assets/re1.jpg";
import re2 from "../../../assets/re2.jpg";
import re3 from "../../../assets/re3.jpg";
import re4 from "../../../assets/re4.jpg";
import re5 from "../../../assets/re5.jpg";
import re6 from "../../../assets/re6.jpg";
import re7 from "../../../assets/re7.gif";
import re8 from "../../../assets/re8.png";
import re9 from "../../../assets/re9.png";
import re10 from "../../../assets/re10.png";
import re11 from "../../../assets/re11.jpg";
import re12 from "../../../assets/re12.png";
import re13 from "../../../assets/re13.png";
import re14 from "../../../assets/re14.png";
import re15 from "../../../assets/re15.png";
import re16 from "../../../assets/re16.png";
import re17 from "../../../assets/re17.png";
import re18 from "../../../assets/re18.jpg";
import re19 from "../../../assets/re19.png";
import re20 from "../../../assets/re20.png";
import re21 from "../../../assets/re21.png";
import re22 from "../../../assets/re22.png";
import re23 from "../../../assets/re23.png";
import hsn_book from "../../../assets/hsn-book.png";
import book from "../../../assets/Book.jpg";
import thirty_days from "../../../assets/30-days.png";
import mobile_view from "../../../assets/mobile_view.png";
import "./style.css";
const RealEstateMistakes = () => {
  return (
    <div>
      <section
        className="page-title"
        style={{ backgroundImage: `url(${blogheader})` }}
      >
        <div className="auto-container">
          <br />
          <br />
          <br />
          <h1>Blog Single</h1>
          <ul className="bread-crumb clearfix">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Blog Single</li>
          </ul>
        </div>
      </section>
      {/*End Page Title*/}

      {/*Sidebar Page Container*/}
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Content Side / Blog Sidebar*/}
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="blog-single">
                {/* News Block Three */}
                <div className="news-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <img src={realestate} alt="" />
                      </figure>
                    </div>
                    <div className="lower-content">
                      <ul className="post-info">
                        <li>
                          <span className="far fa-user" />
                          FLORAHOMES GC
                        </li>
                        <li>
                          <span className="far fa-comments" /> Comments 7
                        </li>
                      </ul>
                      <h3 style={{ textAlign: "left", color: "black" }}>
                        <b>
                          The 23 real estate mistakes that are making property
                          investors to be losing billions of naira annually and
                          how not to ever make any of such mistakes.
                        </b>
                      </h3>
                      <p style={{ color: "gray", textAlign: "left" }}>
                        by FlorahomesGC | Real Esate - Real Story
                      </p>
                      <p style={{ textAlign: "left" }}>
                        Posted On: May 20, 2019
                      </p>
                      <br />

                      <p className="text-justify">
                        <span>
                          Well, this content might be deactivated soon.
                          <br />
                          Enjoy the read while you can.
                        </span>
                        <span>
                          This might be the best thing you need in order for you
                          to keep succeeding and never again be a victim of scam
                          or any form of losses in Real Estate Investment.
                        </span>
                        We need to demystify this because we're tired of this
                        spreading menace of losses and scams due to lack of
                        certain awareness on the buyer side. Some people don't
                        even know yet that they don't have any property despite
                        paying for it. It's left to you to either take your time
                        to read it or scoff it aside. Good luck on whatever
                        decision you make.
                      </p>
                      <p className="justify-center">
                        Now, let's begin!
                        <br />
                        On the surface, real estate investing seems so easy;
                        passive income, property appreciation, future benefit,
                        rental benefit, watch it grow, low-risk investment,
                        financial freedom, long-lasting wealth, a way to tie
                        money down for the future, and more. In reality, it's a
                        professional industry that's crowded by so many people
                        who do not know about the already existing high risk in
                        it, and neither do they know how to mitigate such risk,
                        therefore, many who are investing are mostly trashing
                        their money without even knowing it.
                        <span>
                          Here are the mistakes so many buyers/investors make
                          and how you can personally avoid them going forward.
                        </span>
                      </p>
                      <div className="blog-content-paragraph mt-5">
                        <h4>
                          1. So just because you're buying from an estate and
                          you see the land with your eyes, does that
                          automatically guarantee it's a safe buy?
                        </h4>
                        <img src={re1} className="img-fluid w-100" alt="" />
                        <p className="text-justify">
                          <span>
                            Several buyers just visit the "estate" to view it,
                            then get to the seller's office to collect some
                            documents or probably get the documents online, then
                            search it, fill some forms, make payment... and
                            that's it.
                          </span>
                          <span>
                            This is the most popular way investors lose their
                            investment without even knowing. If you made this
                            mistake and you feel you've lost nothing, first go
                            and verify the property now before you begin to
                            spend more money developing it. We've seen 10 years,
                            20 years houses getting demolished and people
                            getting evicted from their supposed property simply
                            because it was a wrong buy… even Estates.
                          </span>
                          <span>
                            Yes, buying from estate can be safe! However, since
                            land doesn't have a face, then "seeing is NOT
                            believing" in property matters. You can at least use
                            your Android phone to pick the coordinates if you
                            can't go with a Surveyor who can do that for you.
                            This is so that you can confirm the status and
                            correlate it with the document/coordinates earlier
                            given to you. The difference between a free land and
                            a committed land is not by the signboard nor the
                            developments seen around, it's an imaginary mapping
                            you can't see with your eyes. Some estates are
                            totally free, some are partly free partly committed,
                            some are totally committed and they sell to you
                            using the documents/coordinates around the boundary
                            of their own property or they lie to you about the
                            status. They know that you do not know, so now that
                            you know better, do something different.
                          </span>
                          <span>
                            One of the reasons for this easy loss from buyers is
                            the fact that buyers automatically assume that
                            "Estate Developers" are all saints and "Omoonile"
                            are all evil, so they don't engage the right
                            property professional to advise them.
                          </span>
                          This message is not a discouragement from buying
                          property within "estates". On a normal ground, those
                          selling the estates should have done these
                          verifications, yet, sometimes, they're either wrongly
                          advised while some of them deliberately go for a
                          committed land that can give them an edge in selling
                          cheap land. Haven't you ever wondered why there are
                          big price margins in some properties within the same
                          location? Sometimes even side by side? We can't begin
                          to mention many stories of loss due to this popular
                          mistake. If you think this is hyped, wait until it's
                          close home then. Let the message sink. Is it
                          sinking?🤔.
                        </p>
                      </div>
                      <div className="blog-content-paragraph mt-5">
                        <h4>
                          2. Just because you only deal in houses, then you
                          think that land matters are never going to be your
                          headache.
                        </h4>
                        <img src={re2} alt="" className="img-fluid w-100" />
                        <p className="text-justify">
                          Stop it. In fact, if you keep on having this notion,
                          it's surely going to be your fever. This set of people
                          are the ones that deceive themselves the most. The
                          houses being sold to you, are they built on the sky?
                          Why do mansions, apartments, and even skyscrapers get
                          demolished? Why do some landlords get evicted from
                          their homes? Even within Estates o? Those who sold
                          houses to you bought land, or at least bought houses
                          from someone who bought land and they made some of
                          these terrible mistakes in their transactions. Don't
                          make the mistake of not learning about the basis of
                          secure and futuristic property transactions. This is
                          so that you'll not end up being the one to carry the
                          nemesis when it shows. Even though most of these
                          losses are avoidable, yet, they're becoming more
                          rampant with house-buyers too. Learn this while you
                          still have the opportunity. Read on!✍️👩‍💻
                        </p>
                      </div>
                      <div className="blog-content-paragraph">
                        <h4>
                          3. You got a property recommendation from a
                          friend/family and just paid for it without verifying
                          the property.
                        </h4>
                        <img src={re3} alt="" className="img-fluid w-100" />
                        <p className="text-justify">
                          Don't get me wrong, it's not wrong to get
                          recommendations from family and friends. What's wrong
                          is basing your decision to buy on absolutely word of
                          mouth without due verification. Ask yourself if the
                          person recommending is a property professional or he
                          has a property professional as an Advisor. We're not
                          referring to marketers as property professionals here
                          (unless they are certified as such). Marketers are
                          good and loyal but don't forget that they mostly
                          depend on the information narrated to them by the
                          developers/sellers to do their marketing. Some of
                          themA even go all out to see the property/land but
                          seeing the property solves no problem in land
                          verification unless they do thorough verification with
                          the help of experts.{" "}
                        </p>
                      </div>
                      <div className="blog-content-paragraph">
                        <h4>
                          4. Not Understanding what Land Title means and not
                          knowing that the absence of it is a deal-breaker.
                        </h4>
                        <img src={re4} alt="" className="img-fluid w-100" />
                        <p className="text-justify">
                          Firstly, do you even know that Title Document is the
                          only thing that can prove your ownership of a property
                          and nothing else? So how then do you go about buying
                          land without knowing its Title when you can't go about
                          confidently claiming a car that has no ownership
                          document in your name? Because you don't know, that's
                          why it's easy for a seller to sell a single parcel of
                          land to more than 3 people...
                          <span>
                            For layman sake, Title includes C of O, Governor's
                            consent, Allocation, Gazette, Excision, etc
                            <br />
                            Some of these titles have 'Good moments' and 'Bad
                            moments'. For example, you can't buy an "Allocation"
                            from Omoonile and be jubilating, that's a disaster,
                            even though "Allocation" on its own means that the
                            Government has granted some people the permission to
                            occupy and transfer such property. Allocation
                            property can only be bought from those whom it's
                            allocated to and not from the omoonile. "Allocation"
                            is not granted to omoonile, the same way "Excision"
                            is not granted to individuals/organizations,
                            excision is granted to the omoonile or the
                            community… so if a company is marketing an excision
                            or gazette, it should be in the Omo'onile's name.
                          </span>
                          <span>
                            There are some that are called "Titles" to buyers,
                            they are ridiculously common but they're not titles
                            and this alone makes it easy for Investors to keep
                            losing money. Before you jump into conclusion
                            half-way into the message, finish reading the
                            explanation. Examples of such "Titles" include
                            "general acquisition", “Registered Survey”, "Deeds
                            of Assignment", "Excision Block", “Excision In
                            Progress” "Excision in View" and many of such🙄
                          </span>
                          <span>
                            As for Survey and Deed of Assignment, read this
                            carefully before you get bamboozled especially if
                            you're buying within an Estate.
                            <br />A Deed of Assignment that is consent to by the
                            Governor is what is called Governor's Consent (at
                            such, it won't be referred to as a Deed of
                            Assignment again), and a Survey plan that's duly
                            registered with the Surveyor general of the state
                            and confirmed as registered means that the land is
                            free. However, when they do not meet the levels
                            earlier mentioned, they're just 2 documents that can
                            either be so important or can be so useless.
                          </span>
                          <span>
                            First, if these 2 documents are for free land, then
                            they're very important documents but as important as
                            they are, they are not on their own called
                            "Title"... they're just necessary documents needed
                            in the perfection of Title.
                          </span>
                          <span>
                            Second, if these 2 documents are for land that is
                            not free, both the Survey and the Deed of Assignment
                            becomes totally USELESS because you may totally lose
                            the property or end up spending more than the amount
                            you bought the land in order to protect yourself
                            from eviction, demolition or any 3rd party
                            claimants.
                            <br />
                            The majority of those who call them "Title" in their
                            marketing do so within this second category. Either
                            as a means of manipulating the buyers or by just
                            mere ignorance. This is confirmed from our site
                            research of some of these acclaimed estates with
                            these "Titles", most of their lands are not free.
                          </span>
                          <span>
                            Furthermore, can you see those attachments beside
                            the word "Excision"? Run when you see them. What
                            many don't understand is that, even though "in
                            progress" is a process to being granted the Excision
                            by the government, yet, that "in progress" may never
                            ever be excised till eternity. And when some of them
                            get excised, it'll be a little part of the whole
                            parcel because the government never releases all. So
                            what's your gain when you find out that the part you
                            paid for isn't part of the excised land?
                          </span>
                          <span>
                            The result of buying land that is claimed to have
                            "Titles" that are not Title may be that you'll lose
                            the property totally or rebuy it from the Government
                            by what's called "Regularisation" or you pay a huge
                            sum to perfect the title . . . Unless the land is
                            totally free.
                          </span>
                          If this is clear, what next?
                        </p>
                      </div>
                      <div className="blog-content-paragraph">
                        <h4>
                          5. After knowing that the property has a good title,
                          do you bother to confirm?
                        </h4>
                        <img src={re5} alt="" className="img-fluid w-100" />
                        <p className="text-justify">
                          Do you even know whether the claimed Title truly
                          belongs to the claimed property? Don't get confused,
                          just read on. Have you heard about counterfeits? How
                          about cross-checking that the documents are registered
                          with the government and not fake? or Comparing the
                          document with the actual property location on the site
                          with the help of property experts. How about
                          authenticating the Ownership of the said property?
                          <br />
                          We've received a genuine document, found out the land
                          is free from any known acquisition and yet, by the
                          time we went to the actual site for confirmation, we
                          realized that the document given belongs to an
                          adjoining property. Don't be surprised, this is very
                          common.
                          <span>
                            People do fabricate documents just to sell
                            properties. Some sellers use another property's
                            documents to market a 'close by' property, they end
                            up confusing buyers with location details.
                            <br />
                            Documents may not reveal this to you. But
                            authentication will, with the help of a good and
                            reliable expert.
                          </span>
                        </p>
                        <p className="text-justify">
                          Again, beside forged documents, do you know that even
                          an original CofO can be fake?! It is so unfortunate
                          that people can obtain CofO by fraud and
                          misrepresentation.
                        </p>
                        <p className="text-justify">
                          Now here is the bombshell you need to note;
                        </p>
                        <p className="text-justify">
                          "It is true that a C of O is an evidence of title,
                          however, it still is not in itself a conclusive proof
                          of title."
                        </p>
                        <p className="text-justify">
                          Even wrong people can genuinely obtain it!
                        </p>
                        <p className="text-justify">
                          You therefore may be making a big mistake by relying
                          100% on a C of O, unless other facts are confirmed.
                        </p>
                        <p className="text-justify">
                          So next time you're told it has a Gazette, C of O,
                          Governor's Consent or whatever Title, just know that
                          the verification work has just begun.
                        </p>
                        <p />
                      </div>
                      <div className="blog-content-paragraph">
                        <h4>
                          6. Not knowing how to get the best profitable property
                          investment but you keep believing that all land
                          investments are profitable.
                        </h4>
                        <img src={re6} alt="" className="img-fluid w-100" />
                        <p className="text-justify">
                          Who's funnier than the person that thinks "once it's
                          land, I'm in money" Hello! Wake up.
                          <span>
                            You want to buy land in order for you to keep so
                            that its value will appreciate in the nearest future
                            for profitable reselling (speculation), it's not
                            like you're buying it for your grandchildren o, not
                            for farming o, but you go and buy the land in
                            Ikorodu or in one village in Ekiti state and you're
                            waiting for it to appreciate quickly…
                          </span>
                          <span>
                            You want to earn profitable rental income and you
                            didn't consider a location of high corporate
                            clients, expatriates, working-class residence, high
                            profile businesses, or business owners data? You
                            didn't consider industrial positioning, major
                            linking roads, etc you just bought land in anyhow
                            location because you like the place, or you feel
                            people will always rent it? See, in some villages, a
                            3 bedroom flat still goes for five thousand Naira
                            per annum haha. Ok, let's come to town e.g Lagos, a
                            3 bedroom flat can be as low as N300,000 in some
                            locations and can be as high as N40m per annum
                            rental in Ikoyi without exaggeration. You can Google
                            this.
                          </span>
                          <span>
                            There are different property investment options like
                            house flipping, sponsorship, residential rental,
                            commercial rental, agric, recreational investment,
                            land leasing, build &amp; sell, speculations, etc
                            and there are professional strategies to get the
                            best out of each: is it 5%, 10% or even 200% per
                            annum you desire? Be clear in your communications to
                            your adviser and make sure they're experienced and
                            knowledgeable in the field. Also, if the land you're
                            putting your investment choice has faulty
                            documentation, this can also melt the ice of your
                            investment. Sometimes, using your money for some
                            other profitable businesses might be a better option
                            than just going into what you or your adviser knows
                            close to nothing about. If you practice Build &amp;
                            Sell in the wrong location, it'll never sell. If you
                            tried rentals in some locations, you'll never get a
                            tenant, etc.
                          </span>
                          <span>
                            That's how one buyer built a mansion within one
                            non-motorable and very local settlement in
                            Ibeju-Lekki, thinking that he'll surely get
                            befitting income since it's Ibeju-Lekki. Even though
                            one will get as high as N4m per annum rentals on
                            similar duplex but the highest offer he got was
                            N700,000… why? The guy was wrongly advised. Hear
                            this for your own good; even within Ibeju-Lekki,
                            your investment advisory expert must consider your
                            use, your goal, your ROI expectation, your pocket,
                            and the suitability of locations. It's not just
                            about buying land or building… so ensure you get the
                            best expert on this. Almost everyone keeps singing
                            "this land is close to Dangote" "that one is close
                            to Free Trade Zone" which is good, but there are
                            also many other important factors to be considered.
                            <br />
                            If you're sweet-mouthedly sold into believing that
                            anywhere or any investment option can give you the
                            same profitable returns, then it's just deceit,
                            don't fall for it.
                          </span>
                          Is this confusing you already or you're solidly
                          following?
                        </p>
                        <h4>
                          7) Because you're buying from a big developer, you do
                          not bother to check for encumbrance.
                        </h4>
                        <img src={re7} alt="" className="img-fluid w-100" />
                        <p className="text-justify">
                          Hmmm. It's sad that many Estate buyers have become
                          victims to the debts they know nothing about… either
                          in form of government tax or anything that causes a
                          part or the whole property not to belong to the
                          claimant. Example, recently in Lekki, a whole estate
                          was seized and locked up by AMCON and all buyers
                          evicted. Why? The developer company went into a joint
                          venture with the land-owner. They needed a loan to put
                          up a structure on this estate and of course the loan
                          can only be in the landowner's name since it's the
                          land they used for the collateral. Whenever most
                          people want to buy from estates, they only ask for the
                          title like "is it C of O?, Yes" and that's all without
                          asking for the land documents to do search in order to
                          fish out any collateral issue. So people just went
                          ahead and bought in mass. The debt wasn't fully paid
                          and the eviction happened.{" "}
                        </p>
                        <p className="text-justify">
                          This case is just one of the many cases that happen
                          across different states within Nigeria. Yours might
                          not be like the example mentioned, it may just be a
                          case of a non-registered debt of different types, tax
                          related, government land regulatory fee, etc.
                        </p>
                        <p className="text-justify">
                          This is why when anyone is searching for encumbrance,
                          they need to be smart with it. New happenings require
                          new search methodologies added to the old searching
                          style.
                        </p>
                        <br />
                        <h4>
                          8) The land is genuine and it's now yours, You then
                          fail to put a structure.
                        </h4>
                        <img src={re8} alt="" className="img-fluid w-100" />
                        <p className="text-justify">
                          It's very common to hear people talk about
                          "speculating" their land investment. Gone are the days
                          where nothing will happen. But today, millions of
                          dollars have been lost with respect to occurrences
                          like this.
                        </p>
                        <p></p>
                        <p className="text-justify">
                          There are two ways to ensure the physical security of
                          your land. First, if you're buying from an estate, you
                          may not need to worry much about this, just ensure you
                          confirm that you'll be indemnified against any form of
                          encroachment by the developers you're buying from.
                          This should be boldly written in either your Contract
                          of Sale or Deed of Assignment (as the case may apply
                          to you). If that's confirmed and guaranteed, then go
                          and put your mind at rest.
                        </p>
                      </div>
                      <p className="text-justify">
                        Second, if you're buying non-estate, the minimum you can
                        do as a buyer is to raise a fence and a gatehouse for an
                        occupant that can be your eye. When you don't do this,
                        it's either they use your land to dupe others, or you
                        get duped. Either they encroach your land or they even
                        resell your land without you knowing... Which one would
                        you prefer?. Next time, either you're buying land within
                        an estate that will not indemnify you against
                        encroachment or you're buying a non-estate land, then be
                        prepared to erect a structure. If you cannot afford to
                        put structure like a gatehouse or a fence on the land
                        after the purchase, please don't buy yet, come back
                        later.
                      </p>
                      <h4>
                        9) Investors and their lawyers still believe and rely
                        only on documents for their verification without
                        physical site research.
                      </h4>
                      <img src={re9} alt="" className="img-fluid w-100" />
                      <p className="text-justify">
                        It's true that the only thing that validates possession
                        of a property is the document it has.
                      </p>
                      <p className="text-justify">
                        Besides the fact that there are many fake documents, do
                        you know about the latest document swapping? Ok here's
                        the hint.
                      </p>
                      <p>
                        Do you know that you may have genuine documents, but
                        that document might not belong to the property you're
                        buying? Anyone can use a genuine document belonging to
                        another property/land at the same location with the one
                        you want to buy, and you will never know until you
                        either visit the property with someone who knows how to
                        pick, chart and interprets site coordinates or you only
                        know when you want to process your title for perfection.
                        Of course, it'll look the same for someone who strictly
                        relies on documents or someone who knows nothing about
                        land issues. But the coordinates will never be the same
                        even for a kitchen and sitting room within the same
                        house. This is why every verification or authentication
                        to be carried out always starts with picking the
                        coordinates of the site.
                      </p>
                      <p>
                        Even if all the area falls within a C of O, again, you
                        still need to confirm if your interest property falls
                        within. What if it's discovered it falls just outside
                        the boundary of an existing title? Very common.{" "}
                      </p>
                      <h4>
                        10) You do not understand what Right Of Way is, neither
                        do you bother to know about land use.
                      </h4>
                      <img src={re10} alt="" className="img-fluid w-100" />
                      <p className="text-justify">
                        You'll buy a land, it has a good title, you perfect the
                        title, everything is perfect… not until you need to get
                        building approval, then you get stuck. Because it was
                        realized that the building approval you seek is probably
                        for a parcel of land situated on a road or road
                        setbacks, or for land whose planning use is totally
                        different from your intended use.
                        <br />
                        Amongst different uses the government allocates land for
                        include Residential, Commercial, Industrial,
                        Agricultural, Recreational, Institutional, Road... and
                        Planners do not concern themselves so much with the
                        title, they're majorly about these Land Uses mentioned.
                        The fact that you visit the land and all you see is
                        green or buildings doesn't mean there's no State or
                        Federal government plan on it.
                        <br />A story building demolished in Victoria Island the
                        other time was simply because the place was zoned for
                        Recreational and the owner built Residential.
                      </p>
                      <p className="text-justify">
                        Many people who buy land don't know about Land Uses and
                        yet, it's a serious matter that makes investors lose
                        properties worth billions of naira every year.
                        <br />
                        It's true that the government doesn't carry out adequate
                        awareness to educate the public, rather, they just
                        penalize, yet, you can't use this as an excuse against
                        the law, you can go to the physical planning website to
                        know about some of these things.
                        <br />
                        The majority of demolition cases are due to LAND USES.
                        Take a breath! Then let that sink.
                      </p>
                      <h4>
                        11) So because you went on-site with the surveyor
                        automatically guarantees "it's a yes once the surveyor
                        says it is"
                      </h4>
                      <img src={re11} alt="" className="img-fluid w-100" />
                      <p className="text-justify">
                        What the surveyor does is to confirm if it's free from
                        Government acquisition or not, and also to confirm if
                        the survey plan given to you tallies with the actual
                        physical location of land (amongst other things).
                        Surveyors do not authenticate the ownership of the land.{" "}
                        <br />
                        Surveyors' work doesn't reveal the root of titles.
                        <br />
                        Surveyors' work doesn't include land uses.
                        <br />
                        They do not confirm encumbrance. They do not confirm if
                        it's stolen property, disputed property, or even wrong
                        ownership of the said property. The Surveyor visiting
                        the site isn't all that's needed in verification, it's
                        just the first primary step.
                        <br />
                        Do you get that?
                      </p>
                      <h4>
                        12) The property seller/developer insists you use their
                        'surveyor' for verification.
                      </h4>
                      <h4>
                        <img src={re12} alt="" className="img-fluid w-100" />
                        <p className="text-justify">
                          Ha! Ok, we do understand if they want you to use their
                          Surveyor for your surveying work after purchase. But
                          as for your verification before payment, it should be
                          your decision to make and not theirs.
                          <br />
                          Of course, we're aware some sellers insist that that's
                          their rule, but aren't you expected to smell the flame
                          already? Will you be expecting their Surveyor to tell
                          you anything contrary to what their marketers told
                          you?
                        </p>
                        <p className="text-justify">
                          Using their surveyor to verify the land you want to
                          buy from the same body is a red light. We're referring
                          to the verification you do before paying for a
                          property o. Don't you get this? Must you buy it there?
                          Don't let village people follow you to the city
                          please. Open your eyes.
                        </p>
                      </h4>
                      <h4>
                        13) You do not understand some of the terms being used
                        but you kept agreeing to all terms.
                      </h4>
                      <img src={re13} alt="" className="img-fluid w-100" />
                      <p className="text-justify">
                        Investor sometimes assumes he understands everything
                        about Investment and so he keeps nodding to unfamiliar
                        terminologies used, so as not to look foolish.
                      </p>
                      <p className="text-justify">
                        Why being shy when it's your money at stake here?
                        Investor! Investor!! Investor!!! How many times did you
                        hear your name🙄? If you don't understand, seek
                        clarification. If you still don't understand, Abeg Waka
                        pass.
                      </p>
                      <p className="text-justify">
                        If they call you a fool, rock that name with grace as
                        long as your money is still sleeping in your account.
                        <br />
                        Ask questions until you're satisfied or just pass by.
                        Remember, once money leaves your pocket, it won't come
                        back complete again.
                      </p>
                      <h4>
                        14) You assume it doesn't really matter if the estate
                        you're buying doesn't have an approved layout.
                      </h4>
                      <img src={re14} alt="" className="img-fluid w-100" />
                      <p className="text-justify">
                        Have you ever asked yourself about the reason for the
                        recurring demolition without compensation?
                        <br />
                        Or you think it doesn't happen to estates too?
                        <br />
                        Don't deceive yourself o. If you ask around, you'll
                        witness a lot of demolished estates, abandoned estates,
                        and abandoned lands due to eviction. These are things
                        you may not read in the news. Almost everyone calls you
                        to come and buy this cheap land and that one calls you
                        to an investment around Dangote that can appreciate by
                        1000% in 1 year and you jump on every one of these
                        offers as long as you get them cheap or you get a free
                        plot as another gift.
                        <br />
                        When there's no approved layout, no one can be sure of
                        the appropriate uses, anything can happen whether now or
                        in the nearest future. You don't even know if what's
                        allocated to you is a road. This is what some estates in
                        some cities are currently experiencing… demolition of
                        some part of the estate that is encroaching the road in
                        order to cater for road construction!
                        <br />
                        For an Estate to be called one, the road uses must be
                        efficient, there should be residential, commercial,
                        schools, health, sewage, etc that will complement one
                        another to make life easy for the residents.
                        <br />
                        Without an approved layout, the government considers the
                        estate as encroachment or unplanned development.
                        Consequences include losing the property with little or
                        no compensation at all. This is also why some estates
                        are sealed, only those who are victims can fully
                        understand.
                      </p>
                      <h4>
                        15) You don't see it as necessary to vet the planning
                        permit of the house you want to buy.
                      </h4>
                      <img src={re15} alt="" className="img-fluid w-100" />
                      <p className="text-justify">
                        When it comes to property documentation, people are just
                        stubborn but when they're facing the consequences,
                        they'll become humble and sweaty.
                        <br />
                        If there's one ministry that's very efficient in
                        carrying out penalties and strict adherence to policies,
                        it's the physical planning.
                        <br />
                        Someone would be given a permit to build a 2 story
                        building but they'll end up building 5 stories after the
                        permit approval. When this agency shows up to demolish
                        the property, they'll be pleading unacceptable pleading.
                      </p>
                      <p className="text-justify">
                        Dear buyers, confirm that the building permit correlates
                        with the actual building you want to buy. Remember that
                        after the payment, any loss will be your loss, and not
                        the seller's.
                      </p>
                      <h4>
                        16) You see it as unnecessary to trace the history, know
                        the root-of-title nor research the link between the
                        seller and the previous seller.
                      </h4>
                      <img src={re16} alt="" className="img-fluid w-100" />
                      <p className="text-justify">
                        Sometimes, many people are buying good land but from the
                        wrong owner. A known developer company once bought land
                        from a wrong owner and this land was almost sold out
                        before the real owner of the parcel showed up. Do you
                        know what happened? The developer rebought it.
                        <br />
                        We've seen cases where the developers lost everything
                        and as such their buyers lost everything too without any
                        reallocation. We can't be mentioning names, understand
                        that. Some Developers are credible enough to relocate
                        their buyers, some Developers don't send you. People are
                        in business for different reasons.
                        <br />
                        You don't want to know the stories of individuals that
                        have fallen victim to this.
                      </p>
                      <h4>17) Looking to buy 4 and get 1 free. </h4>
                      <img src={re17} alt="" className="img-fluid w-100" />
                      <p className="text-justify">
                        This isn't just about buying land, it's very common
                        nowadays for people looking for cash return investments
                        in real estate. While some of the investors will be
                        looking to get 200% cash ROI annually, monthly cash
                        returns... in Nigeria o… we do not yet have enough
                        short-lets, hotels and even commercial properties Real
                        Estate Unit Investments (REUI) that can guarantee such,
                        not even feasible abroad. While it's possible to get up
                        to that percentage annual ROI (though might not be in
                        cash) especially through sponsorship investment, the
                        ridiculous expectation we're referring to are those who
                        solely buy and resell properties or those who strictly
                        venture into rentals then promise you heaven on earth
                        profits all in the name of land appreciation. Land is
                        not Agric commodities or production, don't be comparing
                        real estate to those ones if you do not want to lose
                        your capital with the supposed profit.
                      </p>
                      <p className="text-justify">
                        Now as for those who love partaking in different awoof
                        land promo. It's difficult not to fall into a mess when
                        you're enjoying a lot of awoof 😋. So land is now guguru
                        and epa that you can play a price game with.
                        <br />
                        Most times, buyers don't even know the actual Title of
                        these Land even if they claim it has a Title. Honestly,
                        it's a pity for such buyers because they hate the truth.
                        Sometimes, it's better to keep your money than to think
                        you have one land somewhere.
                        <br />
                        Think about this, who will have a genuine land that
                        appreciates very fast and then sell it at 3 for 10 Kobo?
                      </p>
                      <p className="text-justify">
                        Also, if you're buying from a "distressed sale", you
                        still need to be careful. People use those headings to
                        quickly make a profit out of a looming investment. As
                        for buying awoof berekete from some developers, they
                        themselves must have bought it very cheaply from someone
                        who needs to exhaust another person. In the end,
                        everything falls back on the buyer… Think. No one sells
                        gems at a giveaway price.
                      </p>
                      <p className="text-justify">
                        Buy affordable land, but don't buy cheap land. <br />
                        Go for profitable investments, not overhyped
                        investments.
                      </p>
                      <h4>
                        18) You assume since there are lots of houses already
                        built, it shows it's good to buy.
                      </h4>
                      <img src={re18} alt="" className="img-fluid w-100" />
                      <p className="text-justify">
                        This is one of the most misleading steps any investor
                        can take in real estate.
                        <br />
                        What happened to over 2000 buildings demolished in Lagos
                        over 2 years ago?
                        <br />
                        What happened to over 400 luxury houses demolished in
                        Ibeju-Lekki in 2018?
                        <br />
                        What Happened to the mansions brought down at Ibile
                        Holding Abijo sometimes back?
                        <br />
                        Why do you think you see “X” marks on various buildings
                        all over that state/country?
                      </p>
                      <p className="text-justify">
                        Not that you shouldn't buy in a developed location, in
                        fact, it's good for quick value appreciation. What we're
                        talking about is when you use the fact that there are
                        developments as a basis to qualify an investment
                        free-of-wahala, or when you think that there's no need
                        for verification since the place is developed? No! No!!
                        No!!!
                      </p>
                      <p className="text-justify">
                        If it's true that developments are proof of property
                        safety, then there should be no demolition as always
                        seen around. The examples of demolition victims do not
                        exempt some public figures we all know. Let's leave you
                        to figure that out by yourself.
                      </p>
                      <p className="text-justify">
                        These demolitions are mostly a result of making any of
                        the mistakes being mentioned.
                      </p>
                      <p className="text-justify">
                        If you buy wrong, either bare land or houses, even if
                        you've been occupying it for 20 years, it can go down
                        within the blink of an eye if you didn't do the right
                        thing.
                      </p>
                      <h4>
                        19) You're more concerned about lower prices than you
                        are concerned about the longevity of your investment and
                        of flooding ransacking your home.
                      </h4>
                      <img src={re19} alt="" className="img-fluid w-100" />
                      <p className="text-justify">
                        We don't want to burst your bubble but only the truth
                        will set you free. If you buy too cheap, you'll likely
                        lose out in the future to come be it near or far. We
                        don't want to give examples here so that it won't be
                        like an attack to some popular developer brands. A word
                        is enough for the wise.
                      </p>
                      <p className="text-justify">
                        As for the flooding Issue, you see, some people think
                        that flooding is a Lagos thing or Lekki thing, but hey,
                        it's everywhere.
                        <br />
                        Many developers want to consider erecting working and
                        efficient drainages and at the same time, want to
                        attract customers using cheap prices because buyers will
                        prefer to buy cheap alternatives than ultimately saving
                        their own lives. Although this is not really meant to be
                        an option because when life is involved, there's no too
                        much value that can be placed on anyone's life. Now you
                        have your flood home at a reduced price.
                        <br />
                        What can an investor do?
                        <br />
                        Ensure part of the amenities of the supposed estate
                        includes drainages, not just good roads. Good road
                        without drainage? You, your house, the good road all
                        inside water.
                        <br />
                        Also confirm if there's a canal or large water outlet,
                        not just drainages that lead to nowhere except leading
                        back straight to the house of the occupants, sweeping
                        them and their valuables off their feet straight into
                        the water. Pay your developmental fee and never compare
                        the price of peace with the price of just buying
                        property. Do not compromise your future peace simply
                        because of a discounted and cheap offer. Let's be
                        guided, please.
                        <br />
                        And for already developed areas, buy during the raining
                        season or ask for their worst-case scenario water
                        experience.
                      </p>
                      <h4>
                        20) You need to buy a house, but you see it as
                        IRRELEVANT to engage a Civil Engineer to vet the
                        property against any structural defect.
                      </h4>
                      <img src={re20} alt="" className="img-fluid w-100" />
                      <p className="text-justify">
                        A couple of years back, members of our team vetted a
                        building for client purchase and we couldn't close the
                        deal because they reported a likelihood of collapse. We
                        believed the report because they're professionals with
                        years of experience. 2 years later, it was on the news
                        we heard of the collapse in the same estate. Since then,
                        it has always been part of our verification checklist to
                        involve these checks in our clients' house purchase
                        requests.
                        <br />
                        For this same reason, we take time before entering a
                        partnership with developers or house owners because we
                        have to ensure whatever property we're recommending to
                        our clients is futuristic.
                        <br />
                        Paying a professional fee may seem costly to you, but
                        the cost of life is immeasurable. We hope you don't wave
                        this in your building purchase decision.
                      </p>
                      <h4>
                        21) Now that you don pay for the property, una don
                        become landlord be that o 🙌🤓🙌
                      </h4>
                      <img src={re21} alt="" className="img-fluid w-100" />
                      <p className="text-justify">
                        Wait there! Don't be deceived, only the person in
                        possession of the perfect title to a property owns the
                        property. If you've not yet perfected your title, don't
                        celebrate yet. Perfect the title before it leads to
                        regret. Millions of Nairas have been lost to this. This
                        truth is simply why many people lost their properties to
                        Government projects of public interest without a dime of
                        compensation. Some lost it to debt they know nothing
                        about.
                        <br />
                        Another risk is, sometimes, sellers sell to many buyers,
                        then you'll lose that property if you're outsmarted by
                        another sharp buyer who perfects the title before you.
                        If you do not know that before now, know it now.
                        <br />
                        Also, to avoid any form of encumbrance like debt
                        spilling on you, quickly start your title perfection
                        before you lose. Anyone whose name is still registered
                        as the owner can still use it as collateral even if
                        you've paid for it. I wonder why buyers are always too
                        comfortable after purchasing a property without
                        perfecting their Title while the only legal claim anyone
                        can have to a property is the perfect title in the
                        owner's name.
                        <br />
                        There are other issues too relating to this but don't
                        scare yourself, perfect your title and be at peace.
                      </p>
                      <h4>
                        22) Now, you're ready to build, but instead of letting a
                        professional or a certified property company handle your
                        building project, you say "NO!!! village people must be
                        involved".
                      </h4>
                      <img src={re22} alt="" className="img-fluid w-100" />
                      <p className="text-justify">
                        So because your brother is in town where you bought your
                        land, then you have to automatically make him a building
                        contractor🙄🙄
                      </p>
                      <p className="text-justify">
                        Your home design looks like the one in the stone age and
                        on a very bright good afternoon, your interior is dark
                        like in the dark age. Fresh air is struggling to come
                        into your house and your walls are dusting off.
                        <br />
                        If they don't dupe you nor even want to kill you on top
                        of your money while they send fake pictures to you, they
                        use your money to buy inferior materials and soon your
                        roof will be leaking.
                        <br />
                        Sometimes, your family or friends don't intend any harm,
                        but they themselves don't know how to do it better
                        because they only get someone known in the neighborhood
                        to fix the supposed professional job for you thinking
                        that they're saving you cost.
                        <br />
                        So when there are cracks or collapses which we don't
                        wish for, don't point fingers at anyone. Instead of
                        paying your dues to a reputable professional for a great
                        job, you pay times 10 to someone who knows nothing about
                        the job just because you feel that will cost less.
                        <br />
                        This kind of mistake is also common when people want to
                        buy property. Instead of them using a local professional
                        that is familiar with the technicalities and happenings
                        within the locality of their property choice, these
                        prospective buyers will go and bring their own imported
                        surveyor or imported lawyer from another state to come
                        and work within a location those ones are not familiar
                        with. All because it's their friend, family or a
                        recommendation from a family member. When yawa gas, you
                        won't hear from them again.
                        <br />
                        There are some things you don't read in the books,
                        that's why any professional you're involving has to also
                        be street-smart and experienced even if they operate in
                        the locality of your interest. Don't just engage anyhow.
                        Despite having our own experienced property
                        professionals executing our clients' jobs across
                        different states within Nigeria, we still prioritize
                        collaborating with experienced local professionals
                        within the terrain of the job we have.
                      </p>
                      <p className="text-justify">
                        In short, stop making your property project a family
                        affair… because it's not!
                      </p>
                      <h4>
                        23) You confuse engaging A PROFESSIONAL with engaging
                        THE RIGHT PROFESSIONAL but you argue that you know what
                        you're doing because one of your family members is a
                        "Something Surveyor".
                      </h4>
                      <img src={re23} alt="" className="img-fluid w-100" />
                      <p className="text-justify">
                        Employing a professional property expert for a specific
                        landed project work requires you to understand each of
                        the needed professionals and their qualified roles no
                        matter their truthfulness and years of experience!
                      </p>
                      <p className="text-justify">
                        Quantity Surveyors, Civil Engineers, Lawyers... are
                        professionals but they are not the right people to
                        advise you on Land Status, it's not just their field of
                        expertise. That one belongs to a Land Surveyor.
                      </p>
                      <p className="text-justify">
                        A Land Surveyor, a Lawyer, or a Quantity Surveyor won't
                        be the one to advise you on Approved Layout Status,
                        Planning Permits, or appropriate Land Use, that one
                        belongs to a Townplanner.
                      </p>
                      <p className="text-justify">
                        And when it comes to Property Documentation, Searches,
                        and Authentication of ownership, you should call upon an
                        Estate Surveyor &amp; Valuer or a well-versed Property
                        Lawyer. This is not to say that there are no
                        documentations that belong to Townplanners, Land
                        Surveyors, Architects, or Civil Engineers... It's just
                        dependent on what needs to be documented.
                      </p>
                      <p className="text-justify">
                        When it comes to quality control, quantity, and costing
                        of materials used for construction projects, no one can
                        do it better than a Quantity Surveyor. They're also good
                        at site supervision.
                      </p>
                      <p className="text-justify">
                        To verify if there are structural defects on the
                        building or flood susceptibility on your interest
                        property, a site Architect, Builder or Civil Engineer
                        will fit that.
                      </p>
                      <p className="text-justify">
                        It's not possible for us to list all the roles of these
                        professionals or list all other professionals involved
                        in property matters here on this blog, we just want
                        everyone to be guided.
                      </p>
                      <p className="text-justify">
                        Don't just use any professional for any role and don't
                        use only one professional for everything unless it's a
                        firm that has all these Professionals.
                      </p>
                      <p className="text-justify">
                        Whoever is not qualified for another person's job is a
                        quack in that other field.
                        <br />
                        If you use quacks thinking that you're saving money, in
                        fact, you'll be losing a lot of money without knowing.
                        <br />
                        If you fall for it, you'll be the only one to face your
                        issues when they surface.
                      </p>
                      <p className="text-justify">
                        The reality is hard to swallow, but these and many more
                        are some of the issues we've attended to in our firm, we
                        don't want to have more victims of property investment
                        losses to prove more points.
                      </p>
                      <p className="text-justify">
                        The truth you know will set you free . . . only if you
                        use it.
                        <br />
                        Let's save a life, by saving the properties...
                      </p>
                      <div
                        className="container"
                        style={{
                          width: "100%",
                          height: "12px",
                          background: "#4AB760",
                        }}
                      />
                      <br />
                      <p
                        className="text-justify"
                        style={{ textTransform: "uppercase" }}
                      >
                        <b>
                          To scam proof and loss-proof yourself in anything real
                          estate investing, we have these 3 important
                          recommendations for you.
                        </b>
                      </p>
                      <p className="text-justify" style={{ fontSize: "1.3em" }}>
                        <b>
                          1. If you've seen a land or building of your choice,
                          let us help you run a complete verification on it
                          before you pay.
                        </b>
                      </p>
                      <div className="my-3">
                        <Link
                          className="theme-btn btn-style-two"
                          to="/verification "
                        >
                          <span className="btn-title">
                            Click here to see how it works.{" "}
                          </span>{" "}
                        </Link>
                      </div>
                      <p />
                      <div
                        className="container"
                        style={{
                          width: "100%",
                          height: "2px",
                          background: "#541484",
                        }}
                      />
                      <p className="text-justify" style={{ fontSize: "1.3em" }}>
                        <b>
                          2. If you want to buy property and you just want to
                          give us the details of your need while we handle the
                          purchase from start to finish; Sourcing, Verification,
                          Valuation, Negotiation, Payment, Survey, Documentation
                          and processing of title perfection in your name, then
                          there you have it.{" "}
                        </b>
                      </p>
                      <div className="my-3">
                        <Link className="theme-btn btn-style-two" to="/cpbs">
                          <span className="btn-title">
                            Click here to know what it details.
                          </span>{" "}
                        </Link>
                      </div>
                      <div
                        className="container"
                        style={{
                          width: "100%",
                          height: "2px",
                          background: "#541484",
                        }}
                      />
                      <p className="text-justify" style={{ fontSize: "1.3em" }}>
                        <b>
                          3. Buy from our properties either as an individual
                          interested in our estates properties or as a property
                          developer or organisation interested in verified land
                          expanse and off taking of buildings. Send us a mail on
                        </b>
                        <b style={{ color: "#541484" }}>
                          hello.florahomesgc@gmail.com{" "}
                        </b>
                        or contact our support line directly on +2348094442019
                      </p>
                      <div
                        className="container"
                        style={{
                          width: "100%",
                          height: "2px",
                          background: "#541484",
                        }}
                      />
                      <p className="text-justify" style={{ fontSize: "1.3em" }}>
                        <b>
                          4. #MustHave. Get your eCopy of
                          <b style={{ color: "#541484" }}>
                            {" "}
                            "REAL ESTATE INVESTING WITHOUT TEARS":{" "}
                          </b>{" "}
                          The Exact Checklists Wise Real Estate Investors Are
                          Consulting Before They Spend Even One Kobo On Buying
                          Property Anywhere In Nigeria.
                        </b>
                      </p>
                      <div className="may-section">
                        <div className=" content-column col-lg-10 offset-lg-1 col-sm-12">
                          <figure
                            className="image wow fadeIn text-center"
                            style={{ width: "auto" }}
                          >
                            <img src={hsn_book} alt="" width="70%" />
                          </figure>
                        </div>
                        <p>
                          If you don't want to throw your money away and spend
                          the next several months in Police Stations and courts
                          trying to get it back (that's if you can), then get a
                          copy now.{" "}
                        </p>
                        <p>
                          Another opportunity for you (valid only today) is, if
                          you order today, you'll also get a free access to our
                          other hot-selling book
                          <b>"WHERE THE REAL ESTATE MONEY IS"</b>
                        </p>
                        <div className="mob_view">
                          <img src={mobile_view} alt="" />
                        </div>
                        <div className="row row-block">
                          <div className="col-sm-6">
                            <img src={book} alt="" />
                          </div>
                          <div className="col-sm-6">
                            <br />
                            <br />
                            <br />
                            <p>
                              Almost everyone knows about buying land in one
                              remote estate or just somewhere for speculation so
                              that it can appreciate in value over the years…
                            </p>
                            <p>
                              Almost everyone knows about buying a home or
                              developing a building by themselves within a
                              growing area in order to earn rental income or
                              even resell the property at a profit…
                            </p>
                            <p>
                              What many don't know is the fact that these most
                              popular methods are not where the real money is.
                            </p>
                            <p>
                              This is why our experts have put together a one of
                              a kind practical information where just about any
                              level of investor can make the unusual real estate
                              money with is.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p>
                        The easiest part of it is: If you are not satisfied with
                        the contents, you have a 30 Days Money-Back Guarantee to
                        request for your money at 100% refund, you have nothing
                        to lose. Just send mail to
                        <a href="hello.florahomesgc@gmail.com">
                          florahomesgc@gmail.com
                        </a>
                      </p>
                      <div>
                        <img
                          src={thirty_days}
                          className="img-fluid"
                          style={{ height: "154px" }}
                          alt=""
                        />
                      </div>
                      <div className="mt-3">
                        {" "}
                        <h5>
                          {" "}
                          <span
                            style={{ fontWeight: "bold", fontSize: "25px" }}
                          >
                            50% PRICE TODAY
                          </span>{" "}
                          before it reverts to the original price
                        </h5>{" "}
                      </div>
                      <div>
                        {" "}
                        <h5>
                          {" "}
                          <b>In Naira:</b>{" "}
                          <span className="text-danger">
                            <b> N7,700</b> instead of<b> N15,400</b>
                          </span>{" "}
                        </h5>{" "}
                      </div>
                      <div>
                        {" "}
                        <h5>
                          {" "}
                          <b>In Dollar: </b>{" "}
                          <span className="text-danger">
                            {" "}
                            <b>$20</b> instead of <b>$40</b>{" "}
                          </span>
                        </h5>{" "}
                      </div>
                      <div className="my-3">
                        <a
                          className="theme-btn btn-style-two"
                          href="https://paystack.com/pay/investmentchecklist"
                        >
                          <span className="btn-title">
                            {" "}
                            CLICK THIS BUTTON NOW TO PAY IN NAIRA{" "}
                          </span>{" "}
                        </a>
                      </div>
                      <a
                        className="theme-btn btn-style-two"
                        href="https://flutterwave.com/pay/fhgcchecklist"
                      >
                        {" "}
                        <span className="btn-title">
                          CLICK THIS BUTTON NOW TO PAY IN DOLLAR{" "}
                        </span>
                      </a>
                      <p>
                        Would you like to transfer directly into the company
                        account?
                      </p>
                      <h4 style={{ color: "#541484" }}>
                        {" "}
                        <b>Account Name:</b> FloraHomes Global Consult Limited{" "}
                      </h4>
                      <h4 style={{ color: "#541484" }}>
                        {" "}
                        <b>Naira Account:</b> Pay{" "}
                        <b style={{ textDecoration: "underline" }}>N8000</b> to{" "}
                        <b style={{ textDecoration: "underline" }}>
                          0449454858
                        </b>{" "}
                        GTbank OR 0007101193 Jaiz Bank.{" "}
                      </h4>
                      <h4 style={{ color: "#541484" }}>
                        {" "}
                        <b>Dollar Account:</b> Pay{" "}
                        <b style={{ textDecoration: "underline" }}> $22</b> to
                        0449454865 GTbank OR{" "}
                        <b style={{ textDecoration: "underline" }}>
                          0007101210
                        </b>{" "}
                        Jaiz Bank.
                      </h4>
                      <h4 style={{ color: "#541484" }}>
                        {" "}
                        Send the evidence of payment, your name, phone number
                        and location of payment to{" "}
                        <a
                          href="mailto:hello.florahomesgc@gmail.com"
                          style={{
                            textDecoration: "underline",
                            marginRight: "20px",
                          }}
                        >
                          hello.florahomesgc@gmail.com
                        </a>{" "}
                      </h4>
                      <div
                        className="container"
                        style={{
                          width: "100%",
                          height: "12px",
                          background: "#4AB760",
                        }}
                      />
                      <small>
                        DISCLAIMER: This information is part of the "Preventing
                        Real Estate Losses" project By FloraHomes Global Consult
                        Limited professional team. They're reliable and very
                        valuable, created with utmost simplicity to educate and
                        enlighten prospective and existing real estate investors
                        as well as industry stakeholders on how not to fall into
                        property loss of any kind. We specifically disclaim any
                        liability that is incurred from the misuse,
                        mis-interpretation or wrong application of this content
                        and any other information found through any of our media
                        outlets.
                      </small>
                    </div>
                  </div>
                </div>
                <div className="comments-area" id="comment-view">
                  <div className="comment-form my-4">
                    <div className="group-title">
                      <h3>Leave a comment</h3>
                    </div>
                    <Comment user="layinton" message="nice one" />
                    <CommentForm />
                  </div>
                  {/* /.comment-section */}
                </div>
              </div>
            </div>

            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateMistakes;
