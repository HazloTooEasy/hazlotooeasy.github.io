# Guía de Despliegue: Conectar Web Next.js a Dominio Hostinger

Para conectar tu web (creada con Next.js) a tu dominio en Hostinger, la opción más rápida, segura y profesional es utilizar **Vercel** para el alojamiento (hosting) y **Hostinger** solo para el dominio.

Vercel es la plataforma creada por los dueños de Next.js, es gratuita para uso personal y ofrece la mejor velocidad.

## Paso 1: Subir tu código a GitHub (o Vercel CLI)

Si aún no has subido tu código a GitHub:
1. Crea un repositorio en [GitHub.com](https://github.com).
2. Sube los archivos de tu proyecto.

## Paso 2: Desplegar en Vercel

1. Ve a [Vercel.com](https://vercel.com) y crea una cuenta (puedes entrar con tu GitHub).
2. Haz clic en **"Add New..."** > **"Project"**.
3. Importa tu repositorio de GitHub.
4. Dale a **"Deploy"**. Espera a que termine (se pondrá verde).

## Paso 3: Conectar tu Dominio de Hostinger

Una vez tu web esté online en Vercel (con un enlace tipo `tu-proyecto.vercel.app`):

1. En el panel de tu proyecto en Vercel, ve a **Settings** > **Domains**.
2. Escribe tu dominio (ej: `tuempresa.com`) y dale a **Add**.
3. Vercel te dará unos valores DNS (probablemente un A Record y un CNAME).

## Paso 4: Configurar DNS en Hostinger

1. Entra a tu cuenta de **Hostinger**.
2. Ve a la sección **Dominios** y selecciona tu dominio.
3. Busca la opción **"DNS / Zone Editor"** o "Servidores de Nombres".
4. **IMPORTANTE**: Elimina cualquier registro "A" o "CNAME" existente que apunte a "parking" o IPs antiguas de Hostinger para evitar conflictos.
5. Añade los registros que te dio Vercel:

   **Registro tipo A (Para el dominio raíz @):**
   *   **Type**: A
   *   **Name (Host)**: @
   *   **Points to (Value)**: `76.76.21.21` (Esta es la IP de Vercel)
   *   **TTL**: 3600 (o lo que venga por defecto)

   **Registro tipo CNAME (Para www):**
   *   **Type**: CNAME
   *   **Name (Host)**: www
   *   **Points to (Value)**: `cname.vercel-dns.com`
   *   **TTL**: 3600

## Paso 5: Esperar Propagación

*   Vercel detectará los cambios automáticamente. Puede tardar desde unos minutos hasta 24 horas (normalmente es rápido).
*   Una vez aparezcan dos "checks" verdes en Vercel, tu dominio `tuempresa.com` mostrará tu nueva web.

---

### ¿Por qué no alojar los archivos directamente en el Hosting Compartido de Hostinger?
Los planes básicos de Hostinger (Compartido/WordPress) están diseñados para PHP/HTML, no para aplicaciones modernas en **Node.js/Next.js**. Intentar subirlo ahí requiere configuraciones muy complejas y pierdes rendimiento. Usar Vercel + Dominio Hostinger es el estándar de la industria.
