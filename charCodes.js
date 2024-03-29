{/*
    charCodeAt()
    The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

    fromCharCode() 
    The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.

    charAt()
    The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
    This finds the index number of the string, and returns that number.

ASCII code 32 = space ( Space )
ASCII code 33 = ! ( Exclamation mark )
ASCII code 34 = " ( Double quotes ; Quotation mark ; speech marks )
ASCII code 35 = # ( Number sign )
ASCII code 36 = $ ( Dollar sign )
ASCII code 37 = % ( Percent sign )
ASCII code 38 = & ( Ampersand )
ASCII code 39 = ' ( Single quote or Apostrophe )
ASCII code 40 = ( ( round brackets or parentheses, opening round bracket )
ASCII code 41 = ) ( parentheses or round brackets, closing parentheses )
ASCII code 42 = * ( Asterisk )
ASCII code 43 = + ( Plus sign )
ASCII code 44 = , ( Comma )
ASCII code 45 = - ( Hyphen , minus sign )
ASCII code 46 = . ( Dot, full stop )
ASCII code 47 = / ( Slash , forward slash , fraction bar , division slash )
ASCII code 48 = 0 ( number zero )
ASCII code 49 = 1 ( number one )
ASCII code 50 = 2 ( number two )
ASCII code 51 = 3 ( number three )
ASCII code 52 = 4 ( number four )
ASCII code 53 = 5 ( number five )
ASCII code 54 = 6 ( number six )
ASCII code 55 = 7 ( number seven )
ASCII code 56 = 8 ( number eight )
ASCII code 57 = 9 ( number nine )
ASCII code 58 = : ( Colon )
ASCII code 59 = ; ( Semicolon )
ASCII code 60 = < ( Less-than sign )
ASCII code 61 = = ( Equals sign )
ASCII code 62 = > ( Greater-than sign ; Inequality )
ASCII code 63 = ? ( Question mark )
ASCII code 64 = @ ( At sign )
ASCII code 65 = A ( Capital letter A )
ASCII code 66 = B ( Capital letter B )
ASCII code 67 = C ( Capital letter C )
ASCII code 68 = D ( Capital letter D )
ASCII code 69 = E ( Capital letter E )
ASCII code 70 = F ( Capital letter F )
ASCII code 71 = G ( Capital letter G )
ASCII code 72 = H ( Capital letter H )
ASCII code 73 = I ( Capital letter I )
ASCII code 74 = J ( Capital letter J )
ASCII code 75 = K ( Capital letter K )
ASCII code 76 = L ( Capital letter L )
ASCII code 77 = M ( Capital letter M )
ASCII code 78 = N ( Capital letter N )
ASCII code 79 = O ( Capital letter O )
ASCII code 80 = P ( Capital letter P )
ASCII code 81 = Q ( Capital letter Q )
ASCII code 82 = R ( Capital letter R )
ASCII code 83 = S ( Capital letter S )
ASCII code 84 = T ( Capital letter T )
ASCII code 85 = U ( Capital letter U )
ASCII code 86 = V ( Capital letter V )
ASCII code 87 = W ( Capital letter W )
ASCII code 88 = X ( Capital letter X )
ASCII code 89 = Y ( Capital letter Y )
ASCII code 90 = Z ( Capital letter Z )
ASCII code 91 = [ ( square brackets or box brackets, opening bracket )
ASCII code 92 = \ ( Backslash , reverse slash )
ASCII code 93 = ] ( box brackets or square brackets, closing bracket )
ASCII code 94 = ^ ( Circumflex accent or Caret )
ASCII code 95 = _ ( underscore , understrike , underbar or low line )
ASCII code 96 = ` ( Grave accent )
ASCII code 97 = a ( Lowercase letter a , minuscule a )
ASCII code 98 = b ( Lowercase letter b , minuscule b )
ASCII code 99 = c ( Lowercase letter c , minuscule c )
ASCII code 100 = d ( Lowercase letter d , minuscule d )
ASCII code 101 = e ( Lowercase letter e , minuscule e )
ASCII code 102 = f ( Lowercase letter f , minuscule f )
ASCII code 103 = g ( Lowercase letter g , minuscule g )
ASCII code 104 = h ( Lowercase letter h , minuscule h )
ASCII code 105 = i ( Lowercase letter i , minuscule i )
ASCII code 106 = j ( Lowercase letter j , minuscule j )
ASCII code 107 = k ( Lowercase letter k , minuscule k )
ASCII code 108 = l ( Lowercase letter l , minuscule l )
ASCII code 109 = m ( Lowercase letter m , minuscule m )
ASCII code 110 = n ( Lowercase letter n , minuscule n )
ASCII code 111 = o ( Lowercase letter o , minuscule o )
ASCII code 112 = p ( Lowercase letter p , minuscule p )
ASCII code 113 = q ( Lowercase letter q , minuscule q )
ASCII code 114 = r ( Lowercase letter r , minuscule r )
ASCII code 115 = s ( Lowercase letter s , minuscule s )
ASCII code 116 = t ( Lowercase letter t , minuscule t )
ASCII code 117 = u ( Lowercase letter u , minuscule u )
ASCII code 118 = v ( Lowercase letter v , minuscule v )
ASCII code 119 = w ( Lowercase letter w , minuscule w )
ASCII code 120 = x ( Lowercase letter x , minuscule x )
ASCII code 121 = y ( Lowercase letter y , minuscule y )
ASCII code 122 = z ( Lowercase letter z , minuscule z )
ASCII code 123 = { ( braces or curly brackets, opening braces )
ASCII code 124 = | ( vertical-bar, vbar, vertical line or vertical slash )
ASCII code 125 = } ( curly brackets or braces, closing curly brackets )
ASCII code 126 = ~ ( Tilde ; swung dash )

*/}

listCharCodes = () => {
    for (let i = 0; i < 126; i++) {
       console.log( `This is CharCode: ${i} - Character: ${String.fromCharCode(i)}`)
    }
}
listCharCodes()