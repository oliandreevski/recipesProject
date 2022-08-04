import React from "react";
import { format, addHours, addMinutes } from "date-fns";

const FormatDuration = ({ val }) => {
  let helperDate;
  if (val) {
    if (val.length <= 2) {
      if (val > 60) return "error";
      helperDate = addMinutes(new Date(0), val);
      return `Preprataion Time: ${format(helperDate, "mm")} minutes`;
    }
    if (val.length > 2) {
      let hhmm = val.match(/.{1,2}/g);
      if (hhmm[0] > 24 || hhmm[1] > 60) return "error";
      helperDate = addHours(new Date(0), hhmm[0] - 1);
      helperDate = addMinutes(helperDate, hhmm[1]);
      return `Time: ${format(helperDate, "HH:mm")} hour/min`;
    }
  }

  return (
    <span title={val}>
      <i>Preprataion Time:</i>
      <i>{helperDate}</i>
    </span>
  );
};

export default FormatDuration;
