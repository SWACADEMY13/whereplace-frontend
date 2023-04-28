function Msg() {
  return (
    <div
      style={{
        width: "90%",
        height: "40px",
        display: "flex",
        alignItems: "center",
        marginTop: "20px",
        marginLeft: "10px",
      }}
    >
      <div
        style={{
          width: "15%",
          height: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "100%",
        }}
      ></div>
      <div
        style={{
          width: "85%",
          height: "100%",
          marginLeft: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        여기 내용
      </div>
    </div>
  );
}
export default Msg;
