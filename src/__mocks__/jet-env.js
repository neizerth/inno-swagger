/** Jest mock for jet-env (ESM-only package) */
function jetEnv(schema) {
  return {
    NodeEnv: "test",
    Port: 3000,
    ...Object.fromEntries(
      Object.keys(schema || {}).map((k) => [k, k === "Port" ? 3000 : "test"])
    ),
  };
}

jetEnv.num = () => true;
module.exports = jetEnv;
module.exports.num = () => true;
