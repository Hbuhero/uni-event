import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import vuetify from 'vite-plugin-vuetify';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(
      {
        
        theme: {
        container: {
          center: true,
          padding: '2rem',
          screens: {
            '2xl': '1400px'
          }
        },
        extend: {
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            heading: ['Montserrat', 'sans-serif'],
            display: ['Playfair Display', 'serif'],
          },
          fontSize: {
            'xs': '0.75rem',     // 12px
            'sm': '0.875rem',    // 14px
            'base': '1rem',      // 16px
            'lg': '1.125rem',    // 18px
            'xl': '1.25rem',     // 20px
            '2xl': '1.5rem',     // 24px
            '3xl': '1.875rem',   // 30px
            '4xl': '2.25rem',    // 36px
            '5xl': '3rem',       // 48px
            '6xl': '3.75rem',    // 60px
          },
          colors: {
            border: 'hsl(214,31.8%,91.4%)',
            input: 'hsl(214,31.8%,91.4%)',
            ring: 'hsl(222, 84%, 4.9%)',
            background: 'hsl(0, 0%, 100%)',
            foreground: 'hsl(222, 84%, 4.9%)',
            primary: {
              DEFAULT: 'hsl(222, 47.4%, 11.2%)',
              foreground: 'hsl(210, 40%, 98%)'
            },
            secondary: {
              DEFAULT: 'hsl(210, 40%, 96.1%)',
              foreground: 'hsl(222, 47.4% ,11.2%)'
            },
            destructive: {
              DEFAULT: 'hsl(0 ,84.2%, 60.2%)',
              foreground: 'hsl(210, 40% ,98%)'
            },
            muted: {
              DEFAULT: 'hsl(210, 40%, 96.1%)',
              foreground: 'hsl(215, 16.3%, 46.9%)'
            },
            accent: {
              DEFAULT: 'hsl(210, 40%, 96.1%)',
              foreground: 'hsl(222, 47.4%, 11.2%)'
            },
            popover: {
              DEFAULT: 'hsl(0, 0%, 100%)',
              foreground: 'hsl(222, 84%, 4.9%)'
            },
            "card": {
              DEFAULT: 'hsl(0,0%,100%)',
              foreground: 'hsl(222,84%,4.9%)'
            },
            sidebar: {
              DEFAULT: 'hsl(0,0%,98%)',
              foreground: 'hsl(240,5.3%,26.1%)',
              primary: 'hsl(240,5.9%,10%)',
              'primary-foreground': 'hsl(0,0%,98%)',
              accent: 'hsl(240,4.8%,95.9%)',
              'accent-foreground': 'hsl(240,5.9%,10%)',
              border: 'hsl(220,13%,91%)',
              ring: 'hsl(217,91.2%,59.8%)'
            },
            brand: {
              50: '#f0f8ff',
              100: '#e0effe',
              200: '#bae0fd',
              300: '#7dc5fb',
              400: '#38a5f6',
              500: '#1086e8',
              600: '#0165c3',
              700: '#034f9e',
              800: '#084282',
              900: '#0b386d',
              950: '#07224a',
            },
          },
          borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)'
          },
          keyframes: {
            'accordion-down': {
              from: {
                height: '0'
              },
              to: {
                height: 'var(--radix-accordion-content-height)'
              }
            },
            'accordion-up': {
              from: {
                height: 'var(--radix-accordion-content-height)'
              },
              to: {
                height: '0'
              }
            }
          },
          animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out'
          }
        }
      },
      // plugins: [require("tailwindcss-animate")],
    }
    ),
    vuetify({ autoImport: true }),
  ],
  server: {
    host: true, // This will allow access from any IP address
    port: 3000, // You can specify your preferred port
  },
  alias: {
    vue: 'vue/dist/vue.esm-bundler.js'
  }
})
