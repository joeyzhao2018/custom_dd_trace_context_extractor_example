// This function is used to extract the traceId, parentId, and sampleMode from the incoming event.
// An example json payload is:
// {
//   "request":{
//     "headers":{
//         "traceparent":"00-0000000000000000abcdef1234567890-12341e2abcdefabc-02",
//         "x-datadog-parent-id": "1234567123456789000",
//         "x-datadog-trace-id": "9876543217654321000",
//         "x-datadog-sampling-priority": 1,
//         "x-datadog-origin": "rum"
//     }}
// }

exports.nestedJsonExtractor = (event, _) => {
  const nestedJson = event.request.headers; // the payload is nested inside the "request" key
  const result = {
    traceId: nestedJson["x-datadog-trace-id"],
    parentId: nestedJson["x-datadog-parent-id"],
    sampleMode: 1, //parseInt(nestedJson["x-datadog-sampling-priority"], 10);
    source: "event",
  };
  console.log(JSON.stringify(result));
  return result;
};
