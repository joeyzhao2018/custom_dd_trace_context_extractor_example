exports.nestedJsonExtractor = (event, _) => {
  const nestedJson = event.request.headers; // the payload is nested inside the request key
  const result = {
    traceId: nestedJson["x-datadog-trace-id"],
    parentId: nestedJson["x-datadog-parent-id"],
    sampleMode: 1, //parseInt(nestedJson["x-datadog-sampling-priority"], 10);
    source: "event",
  };
  console.log(JSON.stringify(result));
  return result;
};
