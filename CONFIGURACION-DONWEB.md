# =========================================
# CONFIGURACIÓN PARA DONWEB - MARMOLERÍA CESCA
# =========================================

## 📧 CONFIGURACIÓN DE EMAIL PHP

### 1. ARCHIVOS NECESARIOS:
✅ enviar-formulario.php (procesador principal)
✅ gracias.html (página de confirmación)
✅ index.html (con formulario configurado)

### 2. CONFIGURACIÓN EN DONWEB:

#### A. Panel de Control:
1. **Hosting → PHP Configuration**
   - Versión PHP: 7.4 o superior
   - ✅ Activar función mail()

2. **Email → DNS Configuration**
   - ✅ Verificar MX records configurados
   - ✅ SPF record configurado

3. **Hosting → File Manager**
   - Subir TODOS los archivos a public_html/

#### B. Estructura de Archivos en DonWeb:
```
public_html/
├── index.html
├── enviar-formulario.php ⭐
├── gracias.html ⭐
├── nosotros.html
├── catalogo.html
├── styles.css
├── nosotros-new.css
├── catalogo.css
├── script.js
└── img/
    ├── cuarcitas.jpg
    ├── marmol.jpg
    ├── granito.jpg
    ├── cocina.jpg
    ├── baño.jpg
    ├── IMG-home-neolith.jpg
    ├── IMG-home-puraprima.jpg
    └── IMG-home-corian.jpg
```

### 3. PERSONALIZACIÓN:

#### Cambiar email de destino:
📝 Editar línea 7 en `enviar-formulario.php`:
```php
$email_destino = "TU_EMAIL@gmail.com";
```

### 4. DIAGNÓSTICO: NO LLEGAN EMAILS

#### 🔍 PASO 1: Usar archivo de prueba
1. Subir `test-email.php` a public_html/
2. Ir a: https://tudominio.com/test-email.php
3. Verificar si el email de prueba llega

#### 🔍 PASO 2: Verificar en Gmail
- ✅ Revisar bandeja de entrada
- ✅ Revisar carpeta de SPAM/Promociones
- ✅ Buscar emails de tu dominio

#### 🔍 PASO 3: Activar modo debug
En `enviar-formulario.php` línea 8:
```php
$debug_mode = true; // Activar para ver detalles
```

#### 🔍 PASO 4: Verificar configuración DonWeb
1. **Panel → Email Settings**
   - ✅ MX Records configurados
   - ✅ SPF Record: `v=spf1 include:donweb.com ~all`

2. **Panel → PHP Settings**
   - ✅ Función mail() habilitada
   - ✅ sendmail_path configurado

3. **Panel → Error Logs**
   - Revisar errores recientes de PHP

#### 🚨 SOLUCIONES COMUNES:

**A. Si test-email.php dice "función mail() no disponible":**
- Contactar soporte de DonWeb
- Solicitar activación de función mail()

**B. Si mail() funciona pero no llegan emails:**
- Configurar SMTP personalizado
- Verificar que el dominio tenga reputación limpia
- Agregar registros SPF y DKIM

**C. Email va a SPAM:**
- Configurar SPF record correctamente
- Usar dominio verificado en el "From"
- Evitar palabras spam en el asunto

### 5. PRUEBAS:

#### A. Verificar funcionamiento:
1. Ir a: https://tudominio.com/index.html#contacto
2. Completar y enviar formulario
3. Verificar que redirija a: gracias.html
4. Revisar email en Gmail (incluyendo spam)

#### B. Solución de problemas:
- Si no llegan emails → Verificar configuración SMTP en DonWeb
- Si da error 500 → Verificar permisos de archivos PHP
- Si no redirije → Verificar que gracias.html existe

### 5. CONFIGURACIÓN AVANZADA (OPCIONAL):

#### Para mejorar la entrega de emails:
1. **SMTP Personalizado** (en lugar de mail() nativo):
   - Configurar en Panel DonWeb
   - O usar PHPMailer

2. **Anti-spam**:
   - Configurar SPF record
   - Configurar DKIM
   - Verificar dominio

### 6. MANTENIMIENTO:

#### Archivos de log:
- Panel DonWeb → Error Logs
- Revisar errores PHP regularmente

#### Backup:
- Descargar archivos regularmente
- Backup de base de datos (si aplica)

=========================================
🚀 LISTO PARA SUBIR A DONWEB
=========================================

PASOS FINALES:
1. Cambiar email en enviar-formulario.php
2. Subir todos los archivos a public_html/
3. Probar formulario
4. ¡Disfrutar! 🎉
