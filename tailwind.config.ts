module.exports = {
  theme: {
    extend: {
      keyframes: {
        reveal: {
          from: { opacity: "0", "clip-path": "inset(45% 20% 45% 20%)" },
          to: { opacity: "1", "clip-path": "inset(0% 0% 0% 0%)" },
        },
      },
      animation: {
        reveal: "reveal 2s linear both",
      },
    },
  },
  plugins: [],
};
