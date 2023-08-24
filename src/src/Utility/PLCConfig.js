// var geolocate = function () {
//   GeoComply.Client.setLicense(license)
//     .setGeolocationReason(reason)
//     .setUserId(userId);
//   for (var key in customFields) {
//     if (customFields.hasOwnProperty(key)) {
//       GeoComply.Client.customFields.set(key, customFields[key]);
//     }
//   }
//   GeoComply.Client.requestGeolocation();
// };
// if (GeoComply.Client.isConnected()) {
//   geolocate();
// } else {
//   GeoComply.Client.on("connect", function () {
//     onLog("PLC GeoComply Client connected ");
//     geolocate();
//   })
//     .on("error", function (errorCode, errorMessage) {
//       if (!GeoComply.Client.isConnected()) {
//         GeoComply.Client.off("connect");
//         GeoComply.Client.off("error");
//         GeoComply.Client.off("geolocation");
//         GeoComply.Client.off("log");
//         onError("connection.failed", errorCode, errorMessage);
//       } else onError("geolocation.failed", errorCode, errorMessage);
//     })
//     .on("geolocation", function (data) {
//       onSuccess(data);
//     })
//     .on("log", onLog);
//   GeoComply.Client.debug = debug;
//   GeoComply.Client.connect(plcKey, plcEnv, plcVersion);
// }
import { decryptUsingAES128 } from "./ConfigData";
import { ErrorToast } from "../components/Toast/message";
import { GeoComplyKey } from "../constant/GeoEnv";
export const RequestLocation = (
  license,
  geolocationReason,
  userId,
  userPhoneNumber
) => {
  console.log("calleinf");
  window.GeoComply.Client.setLicense(license)
    .setGeolocationReason(geolocationReason)
    .setUserId(userId);
  // for (var key in customFields) {
  //   if (customFields.hasOwnProperty(key)) {
  //     window.GeoComply.Client.customFields.set(key, customFields[key]);
  //   }
  // }
  window.GeoComply.Client.requestGeolocation();
};

export const InitialiizeGeo = () => {
  console.log("InitialiizeGeo");
  if (window.GeoComply.Client.isConnected()) {
    RequestLocation(
      localStorage.getItem("license"),
      "login",
      "24324",
      "1234567890"
    );
  } else {
    window.GeoComply.Client.on("connect", function () {
      console.log("PLC GeoComply Client connected ");
      RequestLocation(
        localStorage.getItem("license"),
        "login",
        "23423",
        "1234567890"
      );
    })
      .on("error", function (errorCode, errorMessage) {
        if (!window.GeoComply.Client.isConnected()) {
          window.GeoComply.Client.off("connect");
          //  window.GeoComply.Client.off("error");
          window.GeoComply.Client.off("geolocation");
          window.GeoComply.Client.off("log");
          // onError("connection.failed", errorCode, errorMessage);
          console.log("connection.failed", errorCode, errorMessage);
          switch (errorCode) {
            case window.GeoComply.Client.CLNT_ERROR_LOCAL_SERVICE_UNAVAILABLE:
              console.log(
                "Connection to GeoComply Client failed. Details: ErrCode=[" +
                  errorCode +
                  "]; ErrMessage=[" +
                  errorMessage +
                  "]"
              );
              if (navigator.userAgentData.platform == "macOS") {
                if (
                  window.confirm(
                    "We need to verify your location before you can use BettDraft. Click Ok to install GeoComply, so that we can validate your location."
                  )
                ) {
                  window.open(GeoComplyKey.installer_link_mac, "_self");
                } else {
                }
              } else if (navigator.userAgentData.platform == "Windows") {
                if (
                  window.confirm(
                    "We need to verify your location before you can use BettDraft. Click Ok to install GeoComply, so that we can validate your location."
                  )
                ) {
                  window.open(GeoComplyKey.installer_link_win, "_self");
                } else {
                }
              }
              break;

            case window.GeoComply.Client.CLNT_ERROR_LOCAL_SERVICE_UNSUP_VER:
              console.log(
                "Connection to GeoComply Client failed. Details: ErrCode=[" +
                  errorCode +
                  "]; ErrMessage=[" +
                  errorMessage +
                  "]"
              );
              ErrorToast(
                "Incompatible local service version (Code 615). Please update to the latest software version. For assistance, contact support."
              );
              break;

            case window.GeoComply.Client.CLNT_ERROR_LOCAL_SERVICE_COMMUNICATION:
              console.log(
                "GeoLocation failed. Details: ErrCode=[" +
                  errorCode +
                  "]; ErrMessage=[" +
                  errorMessage +
                  "]"
              );
              // ErrorToast(
              //   "There was a technical issue (Code 603). Please try again. For assitance, contact support."
              // );
              break;

            case window.GeoComply.Client.CLNT_ERROR_LICENSE_EXPIRED:
            case window.GeoComply.Client.CLNT_ERROR_INVALID_LICENSE_FORMAT:
              console.log(
                "GeoLocation failed. Details: ErrCode=[" +
                  errorCode +
                  "]; ErrMessage=[" +
                  errorMessage +
                  "]"
              );
              ErrorToast(
                "There was a technical issue (Code 606). For assitance, contact support."
              );
              break;

            case window.GeoComply.Client.CLNT_ERROR_CLIENT_LICENSE_UNAUTHORIZED:
              console.log(
                "GeoLocation failed. Details: ErrCode=[" +
                  errorCode +
                  "]; ErrMessage=[" +
                  errorMessage +
                  "]"
              );
              ErrorToast(
                "There was a technical issue (Code 607). For assitance, contact support."
              );
              break;

            case window.GeoComply.Client.CLNT_ERROR_CLIENT_SUSPENDED:
            case window.GeoComply.Client.CLNT_ERROR_DISABLED_SOLUTION:
              console.log(
                "GeoLocation failed. Details: ErrCode=[" +
                  errorCode +
                  "]; ErrMessage=[" +
                  errorMessage +
                  "]"
              );
              ErrorToast(
                "Geolocation disabled (Code 605). For assitance, contact support."
              );
              break;

            case window.GeoComply.Client.CLNT_ERROR_SERVER_COMMUNICATION:
            case window.GeoComply.Client.CLNT_ERROR_NOT_CERTIFIED_BINARIES:
            case window.GeoComply.Client.CLNT_ERROR_NETWORK_CONNECTION:
            case window.GeoComply.Client.CLNT_ERROR_INVALID_CUSTOM_FIELDS:
            case window.GeoComply.Client
              .CLNT_ERROR_REQUEST_GEOLOCATION_IN_PROGRESS:
            case window.GeoComply.Client.CLNT_ERROR_UNEXPECTED:
              console.log(
                "GeoLocation failed. Details: ErrCode=[" + errorCode + "]"
                // ErrMessage=[" +
                // errorMessage +
                // "]"
              );
              // ErrorToast(
              //   "An unexpected error occurred (Code 600). Please try again. For assitance, contact support."
              // );
              break;
            case window.GeoComply.Client.CLNT_ERROR_WRONG_OR_MISSING_PARAMETER:
              console.log(
                "GeoLocation failed. Details: ErrCode=[" +
                  errorCode +
                  "]; ErrMessage=[" +
                  errorMessage +
                  "]"
              );
              ErrorToast(
                "There was a technical issue (Code 699). For assistance, contact support."
              );
              break;

            default:
              console.log(
                "GeoLocation failed. Details: ErrCode=[" +
                  errorCode +
                  "]; ErrMessage=[" +
                  errorMessage +
                  "]"
              );
              ErrorToast(errorMessage);
              break;
          }
        } else {
          console.log("geolocation.failed", errorCode, errorMessage);
        }
        //onError("geolocation.failed", errorCode, errorMessage);
      })
      .on("geolocation", function (data) {
        console.log("geolocation", data);
        if (data) {
          let decryptResponse = decryptUsingAES128(data);
        }
        // onSuccess(data);
      });
    // .on("log", onLog);
    // window.GeoComply.Client.debug = debug;
    window.GeoComply.Client.connect(
      GeoComplyKey.Secret_Key,
      GeoComplyKey.env,
      "4.0.0.4"
    );
  }
};
