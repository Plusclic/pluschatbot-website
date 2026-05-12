# PlusChatbot — Manual de Marca

## Colores

| Nombre        | Hex       | Uso principal                              |
|---------------|-----------|--------------------------------------------|
| Primary       | `#7C3AED` | Botones, CTAs, íconos, gradiente principal |
| Primary Light | `#8B5CF6` | Hover states, texto degradado              |
| Accent        | `#06B6D4` | Gradiente secundario, highlights           |
| Dark Base     | `#0D0520` | Fondo principal de la app                  |
| Dark 2        | `#160A35` | Fondo de secciones secundarias             |
| Dark 3        | `#1E1050` | Cards, modales                             |
| Success       | `#10B981` | Confirmaciones, checks, métricas positivas |
| Error         | `#EF4444` | Errores, alertas                           |
| Text Primary  | `#E2E8F0` | Texto principal (slate-200)                |
| Text Muted    | `#94A3B8` | Texto secundario (slate-400)               |

## Gradiente principal
```css
background: linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%);
```

## Gradiente de texto
```css
background: linear-gradient(135deg, #8B5CF6 0%, #06B6D4 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## Tipografía

| Rol            | Fuente  | Peso(s)              |
|----------------|---------|----------------------|
| Fuente principal | Inter | 300, 400, 500, 600, 700, 800, 900 |

**Importar:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

### Escala tipográfica
| Elemento        | Tamaño     | Peso |
|-----------------|------------|------|
| Hero H1         | 80px / 5rem | 900  |
| H2 sección      | 48px / 3rem | 700  |
| H3 card         | 20px        | 700  |
| Cuerpo normal   | 16px        | 400  |
| Cuerpo pequeño  | 14px        | 400  |
| Label / tag     | 13px        | 500  |

---

## Logo

**Símbolo:** `P+`
**Forma:** Cuadrado con bordes redondeados (border-radius: 10-12px)
**Fondo:** Gradiente `#7C3AED → #06B6D4` (135deg)
**Texto del símbolo:** Blanco, font-weight 900

**Nombre:** `Plus` (blanco) + `Chatbot` (gradiente de texto violet→cyan)

### Tamaños mínimos
| Contexto       | Tamaño icono |
|----------------|-------------|
| Navbar         | 36×36px     |
| Favicon        | 32×32px     |
| App icon       | 512×512px   |

---

## Tagline
> **"Automatiza. Convierte. Crece."**

---

## Espaciado y bordes

| Elemento     | Border radius |
|--------------|---------------|
| Botones      | 10px          |
| Cards        | 16px          |
| Cards grandes | 20px         |
| Íconos box   | 14px          |
| Badges / tags | 100px (pill) |

---

## Botones

### Primario
```css
background: linear-gradient(135deg, #7C3AED, #06B6D4);
color: white;
border-radius: 10px;
padding: 12px 28px;
font-weight: 600;
```

### Secundario
```css
background: transparent;
border: 1px solid rgba(255,255,255,0.18);
color: white;
border-radius: 10px;
padding: 12px 28px;
font-weight: 600;
```

---

## WhatsApp Business
**Número:** +57 300 374 0652

## Redes sociales
- Instagram: @pluschatbot
- Facebook: /pluschatbot
- WhatsApp: +57 300 374 0652

---

## Dominio y plataforma
- **Sitio web:** pluschatbot.com
- **App:** app.pluschatbot.com
- **Repositorio:** github.com/Plusclic/pluschatbot-website
