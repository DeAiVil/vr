module.exports = {
    content: ["./*.html", "./*.js"],
    theme: {
      extend: {
        colors: {
          neonPink: '#ff00ff',
          neonPurple: '#8a2be2',
          darkBg: '#000000',
          accentText: '#b50eaa',
        },
        fontFamily: {
          orbitron: ['Orbitron', 'sans-serif'],
          montserrat: ['Montserrat', 'sans-serif'],
        },
        boxShadow: {
          neon: '0 0 15px #ff00ff, 0 0 25px #8a2be2',
          neonHover: '0 0 25px #ff00ff, 0 0 35px #8a2be2',
        },
        animation: {
          pulseNeon: 'neon-pulse 4s ease-in-out infinite',
        },
        keyframes: {
          'neon-pulse': {
            '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
            '50%': { transform: 'scale(1.2)', opacity: '1' },
          },
        },
      },
    },
    plugins: [],
  }
  