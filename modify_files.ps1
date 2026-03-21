$files = Get-ChildItem -Path .\src -Recurse -Include *.tsx,*.ts,*.css

foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw
    
    # Replace $ with Rupee for prices
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, '\$(\d+)', '₹$1')
    
    # Regex to aggressively remove border tailored classes.
    # Negative lookbehind to avoid matching inside box-border or other compound words
    $borderRegex = '(?<![a-zA-Z0-9-])(?:hover:|focus(?:-[a-z]+)*:|dark:|md:)?!*border(?:-[a-zA-Z0-9\[\]\.-]+)?\b'
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, $borderRegex, '')
    
    # Handle the specific globals.css @apply rule
    if ($f.Name -eq 'globals.css') {
        $content = [System.Text.RegularExpressions.Regex]::Replace($content, '\s*\*\s*\{\s*@apply border-outline-variant;\s*\}', '')
    }

    # Clean up leftover multiple spaces in class names.
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, '  +', ' ')
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, ' className=" ', ' className="')
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, ' className=\{` ', ' className={`')
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, ' "\}', '"}')
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, ' `\}', '`}')
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, '" >', '">')
    
    Set-Content -Path $f.FullName -Value $content -NoNewline
}
