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

            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
            background: '#f9fafb',
            foreground: 'hsl(var(--foreground))',
            primary: {
              DEFAULT: 'hsl(var(--primary))',
              foreground: 'hsl(var(--primary-foreground))'
            },
            secondary: {
              DEFAULT: 'hsl(var(--secondary))',
              foreground: 'hsl(var(--secondary-foreground))'
            },
            destructive: {
              DEFAULT: 'hsl(var(--destructive))',
              foreground: 'hsl(var(--destructive-foreground))'
            },
            muted: {
              DEFAULT: 'hsl(var(--muted))',
              foreground: 'hsl(var(--muted-foreground))'
            },
            accent: {
              DEFAULT: 'hsl(var(--accent))',
              foreground: 'hsl(var(--accent-foreground))'
            },
            popover: {
              DEFAULT: 'hsl(var(--popover))',
              foreground: 'hsl(var(--popover-foreground))'
            },
            card: {
              DEFAULT: 'hsl(var(--card))',
              foreground: 'hsl(var(--card-foreground))'
            },
            sidebar: {
              DEFAULT: 'hsl(var(--sidebar-background))',
              foreground: 'hsl(var(--sidebar-foreground))',
              primary: 'hsl(var(--sidebar-primary))',
              'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
              accent: 'hsl(var(--sidebar-accent))',
              'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
              border: 'hsl(var(--sidebar-border))',
              ring: 'hsl(var(--sidebar-ring))'
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
