$files = Get-ChildItem -Path .\src -Recurse -Include *.tsx,*.ts,*.css

foreach ($f in $files) {
    if ($f.Name -eq 'globals.css') {
        $content = Get-Content $f.FullName -Raw
        $content = [System.Text.RegularExpressions.Regex]::Replace($content, '\s*\*\s*\{\s*@apply border-outline-variant;\s*\}', '')
        Set-Content -Path $f.FullName -Value $content -NoNewline
    } else {
        $content = Get-Content $f.FullName -Raw
        $borderRegex = '(?<![a-zA-Z0-9-])(?:hover:|focus(?:-[a-z]+)*:|dark:|md:)?!*border(?:-[a-zA-Z0-9\[\]\.-]+)?\b'
        $content = [System.Text.RegularExpressions.Regex]::Replace($content, $borderRegex, '')
        
        # Collapse multiple spaces down to one to be tidy, without messing with backticks
        $content = [System.Text.RegularExpressions.Regex]::Replace($content, ' {2,}', ' ')
        
        Set-Content -Path $f.FullName -Value $content -NoNewline
    }
}
