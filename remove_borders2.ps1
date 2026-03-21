$files = Get-ChildItem -Path .\src -Recurse -Include *.tsx,*.css
$borderRegex = '(?<![a-zA-Z0-9-])(?:hover:|focus(?:-[a-z]+)*:|focus-within:|dark:|md:)?!*border(?:-[a-zA-Z0-9\[\]\.-]+)?'

foreach ($f in $files) {
    try {
        $content = Get-Content $f.FullName -Raw
        if ($null -eq $content) { continue }
        $changed = $false
        
        if ($f.Name -eq 'globals.css') {
            $content = [System.Text.RegularExpressions.Regex]::Replace($content, '\s*\*\s*\{\s*@apply border-outline-variant;\s*\}', '')
            $changed = $true
        }
        
        $newContent = [System.Text.RegularExpressions.Regex]::Replace($content, $borderRegex, '')
        if ($content -ne $newContent) {
            $content = $newContent
            $changed = $true
        }

        if ($changed) {
            $content = [System.Text.RegularExpressions.Regex]::Replace($content, ' {2,}', ' ')
            $tempPath = $f.FullName + '.tmp'
            Set-Content -Path $tempPath -Value $content -NoNewline
            Move-Item -Path $tempPath -Destination $f.FullName -Force
        }
    } catch {
        Write-Error "Failed processing $($f.FullName): $_"
    }
}
