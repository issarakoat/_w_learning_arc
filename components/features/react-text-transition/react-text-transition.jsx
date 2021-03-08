import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["This Is Really Cool Text", "It is from", "https://www.npmjs.com/package/react-text-transition"];

const ReactTextTransition = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div class="jumbotron">
        <h3 class="display-4">
          {" "}
          <TextTransition
            text={TEXTS[index % TEXTS.length]}
            springConfig={presets.stiff}
          />
        </h3>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr class="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>
    </>
  );
};
export default ReactTextTransition;
