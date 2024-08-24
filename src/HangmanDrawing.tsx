const HEAD = (
    <div
      style={{
        width: "30px",
        height: "30px",
        borderRadius: "100%",
        border: "6px solid black",
        position: "absolute",
        top: "30px",
        right: "-18px",
      }}
    />
  );
  
  const BODY = (
    <div
      style={{
        width: "6px",
        height: "60px",
        background: "black",
        position: "absolute",
        top: "72px",
        right: 0,
      }}
    />
  );
  
  const RIGHT_ARM = (
    <div
      style={{
        width: "60px",
        height: "6px",
        background: "black",
        position: "absolute",
        top: "90px",
        right: "-60px",
        rotate: "-30deg",
        transformOrigin: "left bottom",
      }}
    />
  );
  
  const LEFT_ARM = (
    <div
      style={{
        width: "60px",
        height: "6px",
        background: "black",
        position: "absolute",
        top: "90px",
        right: "6px",
        rotate: "30deg",
        transformOrigin: "right bottom",
      }}
    />
  );
  
  const RIGHT_LEG = (
    <div
      style={{
        width: "60px",
        height: "6px",
        background: "black",
        position: "absolute",
        top: "126px",
        right: "-54px",
        rotate: "60deg",
        transformOrigin: "left bottom",
      }}
    />
  );
  
  const LEFT_LEG = (
    <div
      style={{
        width: "60px",
        height: "6px",
        background: "black",
        position: "absolute",
        top: "126px",
        right: 0,
        rotate: "-60deg",
        transformOrigin: "right bottom",
      }}
    />
  );
  
  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
  
  type HangmanDrawingProps = {
    numberOfGuesses: number;
  };
  
  export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
      <div style={{ position: "relative" }}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div
          style={{
            height: "30px",
            width: "6px",
            background: "black",
            position: "absolute",
            top: 0,
            right: 0,
          }}
        />
        <div
          style={{
            height: "6px",
            width: "120px",
            background: "black",
            marginLeft: "72px",
          }}
        />
        <div
          style={{
            height: "240px",
            width: "6px",
            background: "black",
            marginLeft: "72px",
          }}
        />
        <div style={{ height: "6px", width: "150px", background: "black" }} />
      </div>
    );
  }
  