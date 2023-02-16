import axios from "axios";
// const testUrl = "http://localhost:9000";
const liveUrl = "https://api.florahomesgc.com";

const baseUrl = `${liveUrl}/api/v1/client-api`;

export const RequestMethod = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

/* @description the function below is used to make network request to external server...... It
 * can easily be passed around
 *
 */

export const networkCall = async ({ method, path, requestBody }) => {
  if (!method || !path) {
    throw new Error(
      "A required parameter is missing. Please provide method or path"
    );
  }
  let response;
  switch (method) {
    case "POST":
      response = await axios.post(`${baseUrl}/${path}`, requestBody);
      return response;
    case "GET":
      response = await axios.get(`${baseUrl}/${path}`);
      return response;
    case "PUT":
      response = await axios.put(`${baseUrl}/${path}`, requestBody);
      return response;
    case "PATCH":
      response = await axios.patch(`${baseUrl}/${path}`, requestBody);
      return response;
    case "DELETE":
      response = await axios.put(`${baseUrl}/${path}`);
      return response;

    default:
      throw new Error("Invalid method, please pass correct api verb");
  }
};
