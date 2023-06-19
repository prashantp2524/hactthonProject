const uiConfigs = {
  style: {
    typoLines: (lines, textAlign) => ({
      textAlign: textAlign || "justify",
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: lines,
    }),
    mainContent: {
      maxWidth: "1366px",
      margin: "auto",
      padding: 2,
    },
  },
  size: {
    sidebarWith: "300px",
    contentMaxWidth: "1366px",
  },
};

export default uiConfigs;
