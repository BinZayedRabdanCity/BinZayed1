<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $targetDir = "audio_uploads/";
    if (!is_dir($targetDir)) mkdir($targetDir, 0755, true);

    $targetFile = $targetDir . basename($_FILES["audioFile"]["name"]);
    $fileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    if($fileType != "mp3") {
        echo "فقط ملفات MP3 مسموحة.";
        exit;
    }

    if (move_uploaded_file($_FILES["audioFile"]["tmp_name"], $targetFile)) {
        echo "تم الرفع بنجاح: <a href='$targetFile'>تشغيل الملف</a>";
    } else {
        echo "حدث خطأ أثناء الرفع.";
    }
}
?>
