function Questions() {
  return (
    <section className="questions">
      <h2>Any questions?</h2>
      <p>
        Contact us at
        {' '}
        <span>hello@cloudimage.io</span>
        , our experts will be
        happy to help!
      </p>
      <div className="github-issue">
        <a
          href="https://github.com/scaleflex/next-cloudimage-responsive/issues/new"
          target="_blank"
          className="transition-filled-button"
          rel="noreferrer"
        >
          Submit GitHub issue
        </a>
      </div>
    </section>
  );
}


export default Questions;
