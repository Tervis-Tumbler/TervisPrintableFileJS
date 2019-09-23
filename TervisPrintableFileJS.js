export function New_TervisPrintableFileURL ({
    $ColorInkImageURL,
    $WhiteInkImageURL,
    $OrderNumber,
    $ProductSize,
    $ProductFormType,
    $CustomyzerProjectID,
    $VuMarkID,
    $PDFPresetName,
    $RemoveDieCutterCalibrationLine,
    $EnvironmentName
}) {
    var $Parameters = Object.fromEntries(
        Object.entries({
            $ColorInkImageURL,
            $WhiteInkImageURL,
            $OrderNumber,
            $ProductSize,
            $ProductFormType,
            $CustomyzerProjectID,
            $VuMarkID,
            $PDFPresetName,
            $RemoveDieCutterCalibrationLine,
            $EnvironmentName
        })
        .map(
            ([$Name, $Value]) =>
            [$Name.slice(1), $Value]
        )
    )
    var $QueryString = new URLSearchParams($Parameters).toString()

    return `https://images2.tervis.com/PrintableFile?${$QueryString}`
}