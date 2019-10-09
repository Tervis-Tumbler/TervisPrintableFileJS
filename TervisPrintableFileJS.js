import {
    Remove_ObjectKeyWithEmptyOrNullValue
} from '@tervis/tervisutilityjs'

export function New_TervisPrintableFileURL ({
    $ColorInkImageURL,
    $WhiteInkImageURL,
    $IDPrintedOnDecoration,
    $ProductSize,
    $ProductFormType,
    $CustomyzerProjectID,
    $VuMarkID,
    $PDFPresetName,
    $RemoveDieCutterCalibrationLine,
    $EnvironmentName
}) {
    var $Parameters = Object.fromEntries(
        Object.entries(
            Remove_ObjectKeyWithEmptyOrNullValue({
                $ColorInkImageURL,
                $WhiteInkImageURL,
                $IDPrintedOnDecoration,
                $ProductSize,
                $ProductFormType,
                $CustomyzerProjectID,
                $VuMarkID,
                $PDFPresetName,
                $RemoveDieCutterCalibrationLine,
                $EnvironmentName
            })
        )
        .map(
            ([$Name, $Value]) =>
            [$Name.slice(1), $Value]
        )
    )
    var $QueryString = new URLSearchParams($Parameters).toString()

    return `https://images2.tervis.com/PrintableFile?${$QueryString}`
}