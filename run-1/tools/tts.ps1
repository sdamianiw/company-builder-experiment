# Text file -> WAV via Windows System.Speech (voice: Zira en-US).
# Usage: powershell -File tts.ps1 <in.txt> <out.wav> [rate:-2..2]
param([string]$InFile, [string]$OutFile, [int]$Rate = 0)
Add-Type -AssemblyName System.Speech
$s = New-Object System.Speech.Synthesis.SpeechSynthesizer
$s.SelectVoice("Microsoft Zira Desktop")
$s.Rate = $Rate
$full = if ([System.IO.Path]::IsPathRooted($OutFile)) { $OutFile } else { Join-Path (Get-Location).Path $OutFile }
$s.SetOutputToWaveFile($full)
$text = Get-Content -Raw -Encoding UTF8 $InFile
$s.Speak($text)
$s.Dispose()
Write-Output ("OK " + $OutFile)
