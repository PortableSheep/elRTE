/**
 * @class elRTE command.
 * Insert html entity into selection
 * @author Dmitry (dio) Levashov, dio@std42.ru
 **/
elRTE.prototype.commands.specialchars = function() {
	this.title       = 'Insert special character';
	this.button      = 'buttonMenu';
	this.widgetClass = 'elrte-ui-widget-grid';
	this.tpl         = '<span title="{label}">{value}</span>';
	this.opts        = {
		// typoraphic
		'&amp;'    : 'Ampersand',
		'&quot;'   : 'Quotation mark',
		'&lsquo;'  : 'Left single qoutation mark',
		'&rsquo;'  : 'Right single qoutation mark',
		'&ldquo;'  : 'Left double qoutation mark',
		'&rdquo;'  : 'Right double qoutation mark',
		'&lsaquo;' : 'Single left angle qoutation mark',
		'&rsaquo;' : 'Single right angle qoutation mark',
		'&laquo;'  : 'Left pointing guillimet',
		'&raquo;'  : 'Right pointing guillimet',
		'&sbquo;'  : 'Single low-9 qoutation mark',
		'&bdquo;'  : 'Double low-9 qoutation mark',
		'&ndash;'  : 'En dash',
		'&mdash;'  : 'Em dash',
		'&macr;'   : 'Macron',
		'&oline'   : 'Overline',
		'&hellip;' : 'Tree dot leader',
		'&middot;' : 'Middle dot',
		'&bull;'   : 'Bullet',
		'&sect;'   : 'Section sign',
		'&para;'   : 'Paragraph sign',
		'&acute;'  : 'Acute accent',
		'&cedil;'  : 'Cedilla',
		'&szlig;'  : 'Sharp-s / es-zid',
		'&brvbar;' : 'Broken bar',
		'&uml;'    : 'Diaeresis',
		'&iexcl;'  : 'Inverted exclamation mark',
		'&iquest;' : 'Inverted question mark',
		'&circ;'   : 'Circumflex accent',
		'&tilde;'  : 'Small tilde',
		'&deg;'    : 'Degree sign',
		'&oslash;' : 'O slash',
		// symbols
		'&copy;'   : 'Copyright sign',
		'&reg;'    : 'Registered sign',
		'&trade;'  : 'Trade mark sign',
		'&curren;' : 'Currency sign',
		'&cent;'   : 'Cent sign',
		'&euro;'   : 'Euro sign',
		'&pound;'  : 'Pound sign',
		'&yen;'    : 'Yen sign',
		// mathematic
		'&lt;'     : 'Less-then sign',
		'&gt;'     : 'Grater-then sign',
		'&le;'     : 'Less-then or equal sign',
		'&ge;'     : 'Grater-then or equal sign',
		'&minus;'  : 'Minus sign',
		'&plusmn;' : 'Plus-minus sign',
		'&divide;' : 'Division sign',
		'&frasl;'  : 'Fraction slash',
		'&times;'  : 'Multiplication sign',
		'&sup1;'   : 'Superscript 1',
		'&sup2;'   : 'Superscript 2',
		'&sup3;'   : 'Superscript 3',
		'&frac14;' : 'Fractation one quorter',
		'&frac12;' : 'Fractation one half',
		'&frac34;' : 'Fractation three quorters',	
		'&fnof;'   : 'Function / florin',
		'&int;'    : 'Integral',
		'&sum;'    : 'N-ary summation',
		'&infin;'  : 'Infinity',
		'&radic;'  : 'Square root',
		'&asymp;'  : 'Almost equal',
		'&ne;'     : 'Not equal',
		'&equiv;'  : 'Idential',
		'&prod'    : 'N-ary product',			
		'&not;'    : 'Not sign',
		'&cap;'    : 'Intersection',
		'&part;'   : 'Partial differential',
		'&permil;' : 'Per mille sign',
		'&micro;'  : 'Micro sign',
		'&ordf;'   : 'Feminine ordinal indicator',
		'&ordm;'   : 'Masculine ordinal indicator',
		'&dagger;' : 'Dagger',
		'&Dagger;' : 'Double dagger',
		'&larr;'   : 'Leftwards arrow',
		'&uarr;'   : 'Upwards arrow',
		'&darr;'   : 'Downwards arrow',
		'&rarr;'   : 'Rightwards arrow',
		'&harr;'   : 'Left right arrow',
		'&loz;'    : 'Lozenge',
		'&clubs;'  : 'Black club suite',
		'&hearts;' : 'Black heart suite',
		'&diams;'  : 'Black diamond suite',
		// greece alphabet
		'&Alpha;'  : 'Alpha',
		'&Beta;'   : 'Beta',
		'&Gamma;'  : 'Gamma',
		'&Delta;'  : 'Delta',
		'&Epsilon;' : 'Epsilon',
		'&Zeta;'   : 'Zeta',
		'&Eta;'    : 'Eta',
		'&Theta;'  : 'Theta',
		'&Iota;'   : 'Iota',
		'&Kappa;'  : 'Kappa',
		'&Lambda;' : 'Lambda',
		'&Mu;'     : 'Mu',
		'&Nu;'     : 'Nu',
		'&Xi;'     : 'Xi',
		'&Omicron;' : 'Omicron',
		'&Pi;'     : 'Pi',
		'&Rho;'    : 'Rho',
		'&Sigma;'  : 'Sigma',
		'&Tau;'    : 'Tau',
		'&Upsilon;' : 'Upsilon',
		'&Phi;'    : 'Phi',
		'&Chi;'    : 'Chi',
		'&Psi;'    : 'Psi',
		'&Omega;'  : 'Omega',
		'&alpha;'  : 'Alpha',
		'&beta;'   : 'Beta',
		'&gamma;'  : 'Gamma',
		'&delta;'  : 'Delta',
		'&epsilon;' : 'Epsilon',
		'&zeta;'   : 'Zeta',
		'&eta;'    : 'Eta',
		'&theta;'  : 'Theta',
		'&iota;'   : 'Iota',
		'&kappa;'  : 'Kappa',
		'&lambda;' : 'Lambda',
		'&mu;'     : 'Mu',
		'&nu;'     : 'Nu',
		'&xi;'     : 'Xi',
		'&omicron;' : 'Omicron',
		'&pi;'     : 'Pi',
		'&rho;'    : 'Rho',
		'&sigma;'  : 'Sigma',
		'&tau;'    : 'Tau',
		'&upsilon;' : 'Upsilon',
		'&phi;'    : 'Phi',
		'&chi;'    : 'Chi',
		'&psi;'    : 'Psi',
		'&omega;'  : 'Omega'
	}
	
	this._exec = function(v) {
		return this.sel.insertHtml(v);
	}
	
	this.events = {
		'wysiwyg'      : function() { this._setState(this.STATE_ENABLE); },
		'source close' : function(e) { e.data.id == this.rte.active.id && this._setState(this.STATE_DISABLE); }
	}

}
