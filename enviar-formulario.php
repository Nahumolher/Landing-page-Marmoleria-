<?php
$debug_mode = true;
$email_destino = "nahuelmolher024@gmail.com";
$asunto = "🏛️ Nueva consulta desde Marmolería Cesca";

function debug_log($message) {
    global $debug_mode;
    if ($debug_mode) {
        error_log("[CESCA DEBUG] " . $message);
        echo "<div style='background: #f0f0f0; padding: 10px; margin: 5px; border-left: 4px solid #007cba;'>DEBUG: " . htmlspecialchars($message) . "</div>";
    }
}

debug_log("Inicio del script - Método: " . $_SERVER["REQUEST_METHOD"]);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $nombre = isset($_POST['nombre']) ? trim(htmlspecialchars($_POST['nombre'])) : '';
    $apellido = isset($_POST['apellido']) ? trim(htmlspecialchars($_POST['apellido'])) : '';
    $email = isset($_POST['email']) ? trim(htmlspecialchars($_POST['email'])) : '';
    $telefono = isset($_POST['telefono']) ? trim(htmlspecialchars($_POST['telefono'])) : '';
    $tipo_consulta = isset($_POST['tipo_consulta']) ? trim(htmlspecialchars($_POST['tipo_consulta'])) : '';
    $mensaje = isset($_POST['mensaje']) ? trim(htmlspecialchars($_POST['mensaje'])) : '';
    
    $errores = [];
    
    if (empty($nombre)) {
        $errores[] = "El nombre es requerido";
    }
    
    if (empty($apellido)) {
        $errores[] = "El apellido es requerido";
    }
    
    if (empty($email)) {
        $errores[] = "El email es requerido";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errores[] = "El email no tiene un formato válido";
    }
    
    if (empty($tipo_consulta)) {
        $errores[] = "Debe seleccionar un tipo de consulta";
    }
    
    if (empty($mensaje)) {
        $errores[] = "El mensaje es requerido";
    }
    
    if (empty($errores)) {
        
        $contenido_email = "
═══════════════════════════════════════════════
🏛️ NUEVA CONSULTA - MARMOLERÍA CESCA
═══════════════════════════════════════════════

👤 DATOS DEL CLIENTE:
━━━━━━━━━━━━━━━━━━━━━━━━━
• Nombre: $nombre $apellido
• Email: $email
• Teléfono: " . ($telefono ?: 'No proporcionado') . "
• Tipo de consulta: $tipo_consulta

💬 MENSAJE:
━━━━━━━━━━━━━━━━━━━━━━━━━
$mensaje

📋 INFORMACIÓN TÉCNICA:
━━━━━━━━━━━━━━━━━━━━━━━━━
• Fecha: " . date('d/m/Y H:i:s') . "
• IP: " . $_SERVER['REMOTE_ADDR'] . "
• Navegador: " . $_SERVER['HTTP_USER_AGENT'] . "
• Sitio web: " . $_SERVER['HTTP_HOST'] . "

═══════════════════════════════════════════════
Este mensaje fue enviado desde el formulario
de contacto de Marmolería Cesca
═══════════════════════════════════════════════
        ";
        
        debug_log("Datos recibidos: " . json_encode($_POST));
        debug_log("Email destino: " . $email_destino);
        
        // Configurar headers del email (mejorados para DonWeb)
        $headers = array();
        $headers[] = "MIME-Version: 1.0";
        $headers[] = "Content-type: text/plain; charset=UTF-8";
        $headers[] = "From: Marmolería Cesca <noreply@" . $_SERVER['HTTP_HOST'] . ">";
        $headers[] = "Reply-To: $nombre $apellido <$email>";
        $headers[] = "X-Mailer: PHP/" . phpversion();
        $headers[] = "X-Priority: 1";
        $headers[] = "Return-Path: noreply@" . $_SERVER['HTTP_HOST'];
        
        debug_log("Headers configurados: " . implode(" | ", $headers));
        
        debug_log("Intentando enviar email...");
        $enviado = mail($email_destino, $asunto, $contenido_email, implode("\r\n", $headers));
        
        debug_log("Resultado del envío: " . ($enviado ? "ÉXITO" : "ERROR"));
        
        if ($enviado) {
            debug_log("Email enviado correctamente, redirigiendo...");
            if (!$debug_mode) {
                header("Location: gracias.html?enviado=true");
                exit();
            } else {
                echo "<div style='background: #d4edda; color: #155724; padding: 15px; margin: 10px; border-radius: 5px;'>";
                echo "<strong>✅ EMAIL ENVIADO CORRECTAMENTE</strong><br>";
                echo "Destinatario: " . htmlspecialchars($email_destino) . "<br>";
                echo "Asunto: " . htmlspecialchars($asunto) . "<br>";
                echo "<a href='gracias.html' style='color: #155724;'>Ir a página de confirmación</a>";
                echo "</div>";
            }
        } else {
            debug_log("Error al enviar email");
            $error_msg = "Error al enviar el mensaje. Por favor, inténtalo nuevamente.";
            
            if ($debug_mode) {
                $error_msg .= "\n\nDetalles técnicos:\n";
                $error_msg .= "- Email destino: " . $email_destino . "\n";
                $error_msg .= "- Servidor: " . $_SERVER['HTTP_HOST'] . "\n";
                $error_msg .= "- PHP Version: " . phpversion() . "\n";
                $error_msg .= "- Función mail() disponible: " . (function_exists('mail') ? 'SÍ' : 'NO') . "\n";
            }
        }
        
    } else {
        $error_msg = "Por favor, corrige los siguientes errores:\n• " . implode("\n• ", $errores);
    }
    
} else {
    header("Location: index.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error - Marmolería Cesca</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        .error-container {
            padding: 150px 30px 100px;
            text-align: center;
            background: var(--cream);
            min-height: 100vh;
        }
        .error-content {
            max-width: 600px;
            margin: 0 auto;
            background: var(--warm-white);
            padding: 3rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
        }
        .error-icon {
            color: #dc3545;
            margin-bottom: 1.5rem;
        }
        .error-message {
            color: var(--medium-brown);
            margin-bottom: 2rem;
            white-space: pre-line;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <a href="index.html">
                        <h1>MARMOLERÍA</h1>
                        <span class="brand-name">CESCA</span>
                    </a>
                </div>
            </div>
        </div>
    </header>

    <section class="error-container">
        <div class="error-content">
            <div class="error-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto; display: block;">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
            </div>
            
            <h2 style="color: var(--primary-brown); margin-bottom: 1rem;">Hubo un problema</h2>
            
            <div class="error-message">
                <?php echo isset($error_msg) ? htmlspecialchars($error_msg) : 'Error desconocido'; ?>
            </div>
            
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="index.html#contacto" class="btn" style="text-decoration: none; padding: 1rem 2rem; background: var(--primary-brown); color: white; border-radius: var(--border-radius);">
                    Volver al Formulario
                </a>
                <a href="index.html" class="btn" style="text-decoration: none; padding: 1rem 2rem; background: transparent; color: var(--primary-brown); border: 2px solid var(--primary-brown); border-radius: var(--border-radius);">
                    Ir al Inicio
                </a>
            </div>
        </div>
    </section>
</body>
</html>
