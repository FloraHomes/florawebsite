import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Registration from "../../../actions/registration";
import ErrorMessage from "../../SharedComponents/Error";
import { Feedback } from "../../SharedComponents/Feedback";
import LoadingComponent from "../../SharedComponents/Loading";

const Reg = ({ showReg, SocialWidget, loading, error, regFeedback }) => {
  const [regDetails, setRegDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    call_number: "",
    whatsapp_number: "",
    client_category: "",
    market_survey: "",
    message: "",
    password: "",
    password2: "",
  });

  const {
    first_name,
    last_name,
    email,
    call_number,
    whatsapp_number,
    client_category,
    market_survey,
    message,
    password,
    password2,
  } = regDetails;

  const onChange = (e) => {
    setRegDetails({ ...regDetails, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      alert("password don't match");
      setRegDetails({
        ...regDetails,
        password: "",
        password2: "",
      });
      return;
    }
    if (!password || password.length < 6) {
      alert("password cannot  be less than 6 characters");
      setRegDetails({
        ...regDetails,
        password: "",
        password2: "",
      });
      return;
    }

    dispatch(Registration(regDetails));
    setRegDetails({
      first_name: "",
      last_name: "",
      email: "",
      call_number: "",
      whatsapp_number: "",
      client_category: "",
      market_survey: "",
      message: "",
      password: "",
      password2: "",
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`${showReg ? "regShow" : "regHide"}`}
      id="registerBox"
      method="post"
    >
      <input
        onChange={onChange}
        name="first_name"
        type="text"
        placeholder="First name"
        value={first_name}
        required
      />
      <input
        onChange={onChange}
        name="last_name"
        type="text"
        placeholder="Last name"
        value={last_name}
        required
      />
      <input
        onChange={onChange}
        name="email"
        type="email"
        placeholder="E-mail"
        value={email}
        required
      />
      <input
        onChange={onChange}
        name="call_number"
        type="number"
        placeholder="Call number"
        value={call_number}
        required
      />
      <input
        onChange={onChange}
        name="whatsapp_number"
        type="number"
        placeholder="WhatsApp Number"
        value={whatsapp_number}
      />
      <select
        name="client_category"
        value={client_category}
        className="mdb-select md-form"
        searchable="Search here.."
        onChange={onChange}
      >
        <option value="" disabled defaultValue>
          Select your category
        </option>
        <option value="Individual buyer/Investors/Owner">
          Individual buyer/Investors/Owner
        </option>
        <option value="Property professionals and contractors ">
          Agent/Marketer/Realtor/Consultants{" "}
        </option>
        <option value="Realtor, Agents, Marketers, Consultants">
          Developer Company/Corporate Organization
        </option>
        <option value="Group of individuals, Developers, Organizations (Corporate, Club, Religious, NGO)">
          Group of Individual/family/club
        </option>
        <option
          value="Individual and Group property OWNER(family, club, corporate, religious)
"
        >
          Property professionals and contractors
        </option>
      </select>

      <select
        name="market_survey"
        value={market_survey}
        className="mdb-select md-form"
        searchable="Search here.."
        onChange={onChange}
      >
        <option value="" disabled defaultValue>
          How do you know about us
        </option>
        <option value="Instagram">Instagram</option>
        <option value="Facebook">Facebook</option>
        <option value="Twitter">Twitter</option>
        <option value="Google">Google</option>
        <option value="LinkedIn">LinkedIn</option>
        <option value="WhatsApp">WhatsApp</option>
        <option value="A Friend">A Friend</option>
        <option value="Others">Others</option>
      </select>

      <input
        onChange={onChange}
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        required
        minLength="6"
      />
      <input
        onChange={onChange}
        name="password2"
        type="password"
        placeholder="Confirm-Password"
        value={password2}
        required
        minLength="6"
      />

      <textarea
        name="message"
        value={message}
        id="message"
        placeholder="Any message? (how you want us to help)"
        onChange={onChange}
      />

      {/* <input type='submit' value='Register' className="theme-btn btn-style-three" onClick={onSubmit} /> */}

      <div className="btn-box mt-3">
        <button
          style={{ width: "100%", fontSize: "20px" }}
          type="submit"
          className="theme-btn btn-style-three"
          value="Register"
          onClick={onSubmit}
        >
          {loading ? (
            <LoadingComponent />
          ) : (
            <span className="btn-title">Register</span>
          )}
        </button>
      </div>
      {error ? (
        <ErrorMessage errorMessage={error} />
      ) : (
        <Feedback regFeedback={regFeedback} />
      )}
      <SocialWidget />
    </form>
  );
};

export default Reg;
