var liste_des_exercices_disponibles = {
		'6C10-1' :Exercice_tables_de_multiplications,
		'6C10-2' :Exercice_tables_de_multiplications_et_multiples_de_10,
		'6C10-3' :Exercice_tables_de_multiplications_et_decimaux,
		'6C20': Exercice_tables_d_additions,
		'6C32': Probleme_course,
		'6M10' : Reglages_6M10,
		'6M12' : Reglages_6M12,
		'6M23' : Reglages_6M23,
		'6M22-1' : Perimetre_aire_et_portions_de_disques,
		'6M22-2' : Reglages_6M22, //périmètre et aire de disque à partir d'un texte
		'6M20' : Aire_de_triangles,
		'6M22' : Perimetre_aire_disques,
		'6N10' : Exercice_ecriture_decimale_a_partir_de_fraction_decimale,
		'6N12' : Exercice_6N12,
		'6N13' : Exercice_6N13,
		'6N20' : Exercice_fractions_decomposer,
		'6N20-2':Exercice_fractions_differentes_ecritures,
		'6N23' : Exercice_ecriture_decimale_a_partir_de_fraction_decimale,
		'6N23_1' : Exercice_differentes_ecritures_nombres_decimaux,
		'6N24' : Exercice_6N24,
		'6N24_1' : Exercice_multiplier_ou_diviser_un_nombre_entier_par_10_100_1000,
		'6N33' : Fraction_d_un_nombre,
		'6N33-1' : Pourcentage_d_un_nombre,
		'5N12':Exercice_fractions_simplifier,
		'5N12-2': Exercice_fractions_completer_egalite,
		'5N18': Exercice_decomposer_en_facteurs_premiers,
		'5N110' : Variation_en_pourcentages,
		'5N21': Exercice_comparer_deux_fractions,
		'5N21-1': Exercice_comparer_quatre_fractions,
		'5N22': Exercice_additionner_des_fractions_5e,
		'5N22-1': Exercice_additionner_ou_soustraire_des_fractions_5e,
		'5R20': Exercice_additions_relatifs,
		'5R20_bis': Exercice_additions_relatifs_a_trou,
		'5R20_ter': Exercice_additions_de_5_relatifs, //on pourrait le corriger avec regroupement des termes de même signe
		'5R21': Exercice_soustractions_relatifs,
		'5R22': Exercice_additions_et_soustraction_de_relatifs,
		'5R31': Exercice_additions_et_soustraction_de_relatifs,
		'5R31-2': Exercice_simplification_somme_algebrique,
		'4R10': Exercice_multiplications_relatifs,
		//12:Exercice_conversions_de_longueurs,
		//13:Exercice_conversions,
		//14:Exercice_conversions_aires,
		//15:Exercice_perimetres_et_aires,
		'3N1': Exercice_developper,
		'LaTeX' : Code_LaTeX_personnalise,
		// 'Perso' : HTML_personnalise,
		//13:Exercice_equation1
	};

//Efface de la liste des exercices disponibles tout ceux qui n'ont pas de version HTML
if (sortie_html){
	var codeMG32 = '';
}

for (var i in liste_des_exercices_disponibles) {
	let exercice = new liste_des_exercices_disponibles[i];
	if (sortie_html && exercice.pas_de_version_HMTL) {
		delete liste_des_exercices_disponibles[i]
	}
	if (!sortie_html && exercice.pas_de_version_LaTeX) {
		delete liste_des_exercices_disponibles[i]
	}
}







	


// Définition des exercices

function Exercice() {
	// Classe parente de tous les exercices qui seront créés
    this.titre = '';
    this.consigne = '';
    this.consigne_correction = '';
    this.liste_questions = [];
    this.liste_corrections = [];
    this.contenu = '';
    this.contenu_correction = '';
    this.nb_questions = 10;
    this.nb_cols = 2;
    this.nb_cols_corr = 2;
    this.spacing = 1;
    this.spacing_corr = 1;
    this.beamer = false;

   	this.besoin_formulaire_numerique = false; // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];
   	this.besoin_formulaire_texte = false; // Sinon this.besoin_formulaire_texte = [texte,tooltip];
   	this.besoin_formulaire_case_a_cocher = false; // Sinon this.besoin_formulaire_case_a_cocher = [texte];

   	this.consigne_modifiable = true;
   	this.nb_questions_modifiable = true;
   	this.nb_cols_modifiable = true;
   	this.nb_cols_corr_modifiable = true;
   	this.spacing_modifiable = true;
   	this.spacing_corr_modifiable = true;

}

function Exercice_decomposer_en_facteurs_premiers(){
//Décomposer un nombre en facteurs premiers 
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = '' ;
	this.sup2 = '' ; 
	this.titre = "Décomposition en facteurs premiers";
	this.consigne = "Écrire les nombres suivants sous la forme d'un produit de facteurs premiers.";
	this.spacing = 2;


	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		
		for (let i = 0, n, facteurs=[], nb_facteurs, texte, texte_corr; i < this.nb_questions; i++) {
			facteurs = [];
			nb_facteurs = randint(3,5);
			for (var k = 0; k < nb_facteurs; k++) {
				if (k<nb_facteurs-1) {
					if (nb_facteurs>3 && k==0){facteurs.push(2)}
					else if (nb_facteurs>4 && k==1){facteurs.push(2)}
					else{
						facteurs.push(choice([2,3,5]));
					}
					
				}
				else {facteurs.push(choice([2,5,7,11]))}
			}
			n = 1
			for (var k = 0; k < facteurs.length; k++) {
				facteurs[k]
				n = n * facteurs[k]
			}
			texte = '$ '+ tex_nombre(n) + ' = \\dotfill $';
			texte_corr = '$ '+ tex_nombre(n) + ' = ' 
			for (var k = 0; k < facteurs.length-1; k++) {
				facteurs[k]
				texte_corr += facteurs[k] + ' \\times '
			}
			texte_corr += facteurs[facteurs.length-1] + ' $';	
			
			
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);

		}
		liste_de_question_to_contenu(this);
	}
	
}

function Exercice_tables_de_multiplications(tables=[2,3,4,5,6,7,8,9]){
//Multiplier deux nombres 
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = tables ;
	this.sup2 = 1 ; // classique|a_trous|melange
	this.titre = "Tables de multiplications";
	this.consigne = 'Calculer';
	this.spacing = 2;


	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		if (this.sup=='') { // Si aucune table n'est saisie
			this.sup = [2,3,4,5,6,7,8,9]
		}
		if (typeof this.sup==='string'){
			this.sup = this.sup.replace(/\s/g, "").replace(";", ",").split(",");// Récupère  la saisie de l'utilisateur
        		//en supprimant les espaces et en remplaçant les points-virgules par des virgules.
        	}
		let couples = creer_couples(this.sup,[2,3,4,5,6,7,8,9,10],this.nb_questions); //Liste tous les couples possibles (2,3)≠(3,2)
		var type_de_questions = 'a_trous';
		for (let i = 0, a, b, texte, texte_corr; i < this.nb_questions; i++) {
			a = couples[i][0];
			b = couples[i][1];
			if (this.sup2==1){
				type_de_questions = 'classique'
			} else if (this.sup2==2){
				type_de_questions = 'a_trous'
			} else {
				type_de_questions = choice(['classique','a_trous'])
			}
			if (type_de_questions=='classique') { // classique
				texte = '$ '+ a + ' \\times ' + b + ' = \\dotfill $';
				texte_corr = '$ '+ a + ' \\times ' + b + ' = ' + a * b +' $';	
			} else { // a trous
				if (this.sup.length>2){ // Si pour le premier facteur il y a plus de 2 posibilités on peut le chercher
					texte = choice(['$ '+ a + ' \\times \\ldots\\ldots = ' + a * b + ' $',
						'$ \\ldots\\ldots' + ' \\times ' + b + ' = ' + a * b + ' $']);
				} else{ // Sinon on demande forcément le 2e facteur	
					texte = '$ '+ a + ' \\times \\ldots\\ldots = ' + a * b + ' $'; 
				}
				
				texte_corr = '$ '+ a + ' \\times ' + b + ' = ' + a * b +' $';
			}
			
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_texte = ['Choix des tables','Nombres séparés par des virgules'] // Texte, tooltip
	this.besoin_formulaire2_numerique = ['Style de questions',3,'1 : Classique\n2: À trous\n3: Mélangé'] 
}

function Exercice_tables_de_multiplications_et_multiples_de_10(tables=[2,3,4,5,6,7,8,9]){
//Multiplier deux nombres 
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = tables ;
	this.titre = "Tables de multiplications et multiples de 10";
	this.consigne = 'Calculer';
	this.spacing = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		if (this.sup=='') { // Si aucune table n'est saisie
			this.sup = [2,3,4,5,6,7,8,9]
		}
		if (typeof this.sup==='string'){
			this.sup = this.sup.replace(/\s/g, "").replace(";", ",").split(",");// Récupère  la saisie de l'utilisateur
        		//en supprimant les espaces et en remplaçant les points-virgules par des virgules.
        	}
		let couples = creer_couples(this.sup,[2,3,4,5,6,7,8,9,10],this.nb_questions); //Liste tous les couples possibles (2,3)≠(3,2)
		for (let i = 0, a, b, k1, k2, texte, texte_corr,melange; i < this.nb_questions; i++) {
			a = couples[i][0];
			b = couples[i][1];
			if (a>1) {
				k1 = choice([1,10,100,1000]);	
			} else{
				k1 = choice([10,100,1000]);
			}
			k2 = choice([1,10,100,1000]);
			a = k1*a;
			b = k2*b;
			melange = randint(0,1);
			if (melange==1) { // échange a et b pour que les multiplications ne soient pas toujours dans le même ordre (surtout lorsque tables n'a qu'un seul élément)
				let c = a;
				a = b;
				b = c;
			}
			
			texte = '$ '+ tex_nombre(a) + ' \\times ' + tex_nombre(b) + ' = \\dotfill $';
			texte_corr = '$ '+ tex_nombre(a) + ' \\times ' + tex_nombre(b) + ' = ' + tex_nombre(a * b) +' $';
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_texte = ['Choix des tables','Nombres séparés par des virgules'] // Texte, tooltip
}

function Exercice_tables_de_multiplications_et_decimaux(tables=[2,3,4,5,6,7,8,9]){
//Multiplier deux nombres 
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = tables ;
	this.titre = "Tables de multiplications et nombres décimaux";
	this.consigne = 'Calculer';
	this.spacing = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		if (this.sup=='') { // Si aucune table n'est saisie
			this.sup = [2,3,4,5,6,7,8,9]
		}
		if (typeof this.sup==='string'){
			this.sup = this.sup.replace(/\s/g, "").replace(";", ",").split(",");// Récupère  la saisie de l'utilisateur
        		//en supprimant les espaces et en remplaçant les points-virgules par des virgules.
        	}
		let couples = creer_couples(this.sup,[2,3,4,5,6,7,8,9],this.nb_questions); //Liste tous les couples possibles (2,3)≠(3,2)
		for (let i = 0, a, b, k1, k2, couple, texte, texte_corr; i < this.nb_questions; i++) {
			a = couples[i][0];
			b = couples[i][1];
			couple = choice([[1,10],[1,100],[1,1000],[10,100],[10,1000],[100,1000]]);
			k1 = couple[0];
			k2 = couple[1];
			a = Algebrite.eval(a/k1);
			b = Algebrite.eval(b/k2);
			texte = '$ '+ tex_nombre(a) + ' \\times ' + tex_nombre(b) + ' = \\dotfill $';
			texte_corr = '$ '+ tex_nombre(a) + ' \\times ' + tex_nombre(b) + ' = ' + tex_nombre(Algebrite.eval(a*b)) +' $';
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_texte = ['Choix des tables','Nombres séparés par des virgules'] // Texte, tooltip
}

function Exercice_tables_d_additions(max=20){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Addition de deux entiers"
	this.consigne = 'Calculer'
	this.sup = max ; // Le paramètre accessible à l'utilisateur sera la valeur maximale
	this.spacing = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt<50;){
			a = randint(2,this.sup);
			b = randint(2,this.sup);
			texte = '$ '+ tex_nombre(a) + ' + ' + tex_nombre(b) + ' = \\dotfill $';
			texte_corr = '$ '+ tex_nombre(a) + ' + ' + tex_nombre(b) + ' = ' + tex_nombre(a + b) +' $';
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];	
}

function Exercice_additions_relatifs(max=20){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ;
	this.sup2 = false; // écriture simplifiée
	this.titre = "Addition de deux entiers relatifs"
	this.consigne = 'Calculer'
	this.spacing = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			a = randint(1,this.sup);
			b = randint(1,this.sup);
			k = choice([[-1,-1],[-1,1],[1,-1]]); // Les deux nombres relatifs ne peuvent pas être tous les deux positifs
			a = a*k[0];
			b = b*k[1];
			if (this.sup2){
				texte = `$ ${a}${ecriture_algebrique(b)} = \\dotfill $`;
				texte_corr = `$ ${a}${ecriture_algebrique(b)} = ${a+b} $`;
			} else {
				texte = '$ '+ ecriture_nombre_relatif(a) + ' + ' + ecriture_nombre_relatif(b) + ' = \\dotfill $';
				texte_corr = '$ '+ ecriture_nombre_relatif(a) + ' + ' + ecriture_nombre_relatif(b) + ' = ' + ecriture_nombre_relatif(a + b) +' $';	
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];
	this.besoin_formulaire2_case_a_cocher = ['Avec des écritures simplifiées'];	
}

function Exercice_additions_relatifs_a_trou(max=20){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ;
	this.sup2 = false; // écriture simplifiée
	this.titre = "Addition à trou de deux entiers relatifs"
	this.consigne = 'Compléter'
	this.spacing = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			a = randint(1,this.sup);
			b = randint(1,this.sup);
			k = choice([[-1,-1],[-1,1],[1,-1]]); // Les deux nombres relatifs ne peuvent pas être tous les deux positifs
			a = a*k[0];
			b = b*k[1];
			if (this.sup2){
				texte = '$ '+ a + ' + ' + '\\ldots\\ldots\\ldots' + ' = ' + (a + b) + ' $';
				texte_corr = '$ '+ a + ecriture_algebrique(b) + ' = ' + (a + b) +' $';
			} else{
				texte = '$ '+ ecriture_nombre_relatif(a) + ' + ' + '\\ldots\\ldots\\ldots' + ' = ' + ecriture_nombre_relatif(a + b) + ' $';
				texte_corr = '$ '+ ecriture_nombre_relatif(a) + ' + ' + ecriture_nombre_relatif(b) + ' = ' + ecriture_nombre_relatif(a + b) +' $';	
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];	
	this.besoin_formulaire2_case_a_cocher = ['Avec des écritures simplifiées'];	
}

function Exercice_soustractions_relatifs(max=20){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ;
	this.sup2 = false; // écriture simplifiée
	this.titre = "Soustraction de deux entiers relatifs"
	this.consigne = 'Calculer'
	this.spacing = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			a = randint(1,this.sup);
			b = randint(1,this.sup);
			k = choice([[-1,-1],[-1,1],[1,-1]]); // Les deux nombres relatifs ne peuvent pas être tous les deux positifs
			a = a*k[0];
			b = b*k[1];
			if (this.sup2){
				texte = '$ '+ a + ' - ' + ecriture_parenthese_si_negatif(b) + ' = \\dotfill $';
				if (b>0){
					texte_corr = '$ '+ a + ' - ' + ecriture_parenthese_si_negatif(b) + ' = ' + (a - b) +' $';
				} else {
					texte_corr = '$ '+ a + ' - ' + ecriture_parenthese_si_negatif(b) + ' = ' + a + ecriture_algebrique(-1*b) + ' = ' + (a - b) +' $';
				}
			} else {
				texte = '$ '+ ecriture_nombre_relatif(a) + ' - ' + ecriture_nombre_relatif(b) + ' = \\dotfill $';
				texte_corr = '$ '+ ecriture_nombre_relatif(a) + ' - ' + ecriture_nombre_relatif(b) + ' = ' + ecriture_nombre_relatif(a) + ' + ' + ecriture_nombre_relatif(-1*b) + ' = ' + ecriture_nombre_relatif(a - b) +' $';
			}
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];
	this.besoin_formulaire2_case_a_cocher = ['Avec des écritures simplifiées'];			
}

function Exercice_multiplications_relatifs(max=10){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ;
	this.sup2 = false; // écriture simplifiée
	this.titre = "Multiplication de deux entiers relatifs"
	this.consigne = 'Calculer'
	this.spacing = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			a = randint(1,this.sup);
			b = randint(1,this.sup);
			k = choice([[-1,-1],[-1,1],[1,-1]]); // Les deux nombres relatifs ne peuvent pas être tous les deux positifs
			a = a*k[0];
			b = b*k[1];
			if (a==1){
				a=-1
			}
			if (b==1){
				b=-1
			}
			if (this.sup2){
				texte = '$ '+ a + ' \\times ' + ecriture_parenthese_si_negatif(b) + ' = \\dotfill $';
				texte_corr = '$ '+ a + ' \\times ' + ecriture_parenthese_si_negatif(b) + ' = ' + (a * b) +' $';
			} else {
				texte = '$ '+ ecriture_nombre_relatif(a) + ' \\times ' + ecriture_nombre_relatif(b) + ' = \\dotfill $';
				texte_corr = '$ '+ ecriture_nombre_relatif(a) + ' \\times ' + ecriture_nombre_relatif(b) + ' = ' + ecriture_nombre_relatif(a * b) +' $';
			}
				
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];
	this.besoin_formulaire2_case_a_cocher = ['Avec des écritures simplifiées'];		
}


function Exercice_fractions_simplifier(max=11){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ; // Correspond au facteur commun
	this.titre = "Simplification de fractions"
	this.consigne = 'Simplifier les fractions suivantes.'
	this.spacing = 2;
	this.spacing_corr = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
		[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],
		[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]] // Couples de nombres premiers entre eux
		for (let i = 0, fraction, a, b, texte, texte_corr, cpt=0; i < this.nb_questions;i++) {
			fraction = choice(liste_fractions); //
			a = fraction[0];
			b = fraction[1];
			k = randint(2,this.sup)
			enleve_element(liste_fractions,fraction); // Il n'y aura pas 2 fois la même réponse
			texte = '$ '+ tex_fraction(k*a,k*b) + ' = '+ tex_fraction('\\phantom{00000000000000}','') +' = '+tex_fraction('\\phantom{0000}','')+' $';
			texte_corr = '$ '+ tex_fraction(k*a,k*b) + ' = '+ tex_fraction(k+' \\times '+a,k+' \\times '+b) +' = '+tex_fraction(a,b)+' $';
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
	this.besoin_formulaire_numerique = ['Valeur maximale du facteur commun',99999];		
}

function Exercice_fractions_completer_egalite(max=11){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ; // Correspond au facteur commun
	this.titre = "Compléter une égalité de de fractions"
	this.consigne = 'Compléter.'
	this.spacing = 2;
	this.spacing_corr = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
		[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],
		[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]] // Couples de nombres premiers entre eux
		for (let i = 0, fraction, a, b, texte, texte_corr, cpt=0; i < this.nb_questions;i++) {
			fraction = choice(liste_fractions); //
			a = fraction[0];
			b = fraction[1];
			k = randint(2,this.sup)
			enleve_element(liste_fractions,fraction); // Il n'y aura pas 2 fois la même réponse
			texte = '$ '+ tex_fraction(a,b) + ' = '+ tex_fraction('\\phantom{000000000000}','\\phantom{000000000000}') +' = '+tex_fraction('',k*b)+' $';
			texte_corr = '$ '+ tex_fraction(a,b) + ' = '+ tex_fraction(k+' \\times '+a,k+' \\times '+b) +' = '+tex_fraction(k*a,k*b)+' $';
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
	this.besoin_formulaire_numerique = ['Valeur maximale du facteur commun',99999];		
}

function Exercice_comparer_deux_fractions (max=11){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ; // Correspond au facteur commun
	this.titre = "Comparer des fractions (dénominateurs multiples)"
	this.consigne = 'Comparer les fractions suivantes.'
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 5;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
		[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],
		[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]] // Couples de nombres premiers entre eux
		for (let i = 0, fraction, a, b, texte, texte_corr, signe, signe2, cpt=0; i < this.nb_questions;i++) {
			fraction = choice(liste_fractions); //
			a = fraction[0];
			b = fraction[1];
			k = randint(2,this.sup);
			ecart = choice([-4,-3,-2,-1,1,2,3,4]);
			if (k*a+ecart<=0){
				ecart=ecart*(-1)
			}
			if (ecart>0) {
				signe = `<`
				signe2 = `>`
			} else {
				signe = `>`
				signe2=`<`
			}
			enleve_element(liste_fractions,fraction); // Il n'y aura pas 2 fois la même réponse

			ordre_des_fractions = randint(1,2)
			if (ordre_des_fractions==1) {
				texte = `$${tex_fraction(a,b)} \\quad$ et $\\quad ${tex_fraction(k*a+ecart,k*b)}$`;
			} else {
				texte = `$${tex_fraction(k*a+ecart,k*b)} \\quad$ et $\\quad ${tex_fraction(a,b)}$`;
			}
			if (!sortie_html) {
				texte=texte.replace('\\quad$ et $\\quad','\\ldots\\ldots\\ldots')
			}
			texte_corr = `$${tex_fraction(a,b)}=${tex_fraction(a+mise_en_evidence('\\times '+k),b+mise_en_evidence('\\times '+k))}=${tex_fraction(a*k,b*k)}\\quad$`
			if (ordre_des_fractions==1) {
				texte_corr += `  et   $\\quad${tex_fraction(a*k,b*k)} ${signe} ${tex_fraction(a*k+ecart,b*k)}\\quad$ donc $\\quad${tex_fraction(a,b)} ${signe} ${tex_fraction(a*k+ecart,b*k)}$ `;
			} else {
				texte_corr += `  et   $\\quad${tex_fraction(a*k+ecart,b*k)} ${signe2} ${tex_fraction(a*k,b*k)} \\quad$ donc $\\quad ${tex_fraction(a*k+ecart,b*k)} ${signe2} ${tex_fraction(a,b)} $ `;
			}
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
	this.besoin_formulaire_numerique = ['Valeur maximale du coefficient multiplicateur',99999];		
}


function Exercice_comparer_quatre_fractions (){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Comparer quatre fractions (dénominateurs multiples) et un nombre entier"
	this.consigne = "Ranger les nombres suivants dans l'ordre croissant."
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 2;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, denominateurs, n1, d1, n2, d2, n3, d3, n4, d4, k, texte="", texte_corr="", cpt=0; i < this.nb_questions;i++) {
			liste_denominateurs = [[12,2,3,4,6],[16,2,4,8],[18,2,3,6,9],[20,2,4,5,10],[24,2,3,4,8,12],[30,2,3,5,6]]
			denominateurs = choice(liste_denominateurs);
			d1 = denominateurs[0];
			enleve_element(denominateurs,d1);
			d2 = choice(denominateurs);
			enleve_element(denominateurs,d2);
			d3 = choice(denominateurs);
			d4 = choice(denominateurs);
			k = randint(1,3);
			n1 = randint(1,10);
			n2 = randint(1,10);
			n3 = randint(1,10);
			n4 = choice([d4+randint(1,3),d4*2+randint(1,2)],randint(1,10));
			// [num,den,calcul de mise au même dénominateur, num qui correspond au denominateur commun]
			
			while (((n1/d1-n2/d2)*(n1/d1-n3/d3)*(n1/d1-n4/d4)*(n2/d2-n3/d3)*(n2/d3-n4/d4)*(n3/d3-n4/d4)<0.1) || (n1%d1==0) || (n2%d2==0) || (n3%d3==0) || (n4%d4==0) ){
				n1 = randint(1,11);
				n2 = randint(1,11);
				n3 = randint(1,11);
				n4 = randint(1,11);
			}
			let tableau_fractions=[[n1,d1,`$${tex_fraction(n1,d1)}$`,`$${tex_fraction(n1,d1)}$`]]
			tableau_fractions.push([n2,d2,`$${tex_fraction(n2,d2)}=${tex_fraction(n2+mise_en_evidence("\\times"+Algebrite.eval(d1/d2)),d2+mise_en_evidence("\\times"+Algebrite.eval(d1/d2)))}=${tex_fraction(Algebrite.eval(n2*d1/d2),d1)}$`,`$${tex_fraction(Algebrite.eval(n2*d1/d2),d1)}$`])
			tableau_fractions.push([n3,d3,`$${tex_fraction(n3,d3)}=${tex_fraction(n3+mise_en_evidence("\\times"+Algebrite.eval(d1/d3)),d3+mise_en_evidence("\\times"+Algebrite.eval(d1/d3)))}=${tex_fraction(Algebrite.eval(n3*d1/d3),d1)}$`,`$${tex_fraction(Algebrite.eval(n3*d1/d3),d1)}$`])
			tableau_fractions.push([n4,d4,`$${tex_fraction(n4,d4)}=${tex_fraction(n4+mise_en_evidence("\\times"+Algebrite.eval(d1/d4)),d4+mise_en_evidence("\\times"+Algebrite.eval(d1/d4)))}=${tex_fraction(Algebrite.eval(n4*d1/d4),d1)}$`,`$${tex_fraction(Algebrite.eval(n4*d1/d4),d1)}$`])
			tableau_fractions.push([k,1,`$${k}=${tex_fraction(d1*k,d1)}$`,`$${tex_fraction(k*d1,d1)}$`])
			tableau_fractions.sort(compare_fractions)
			let tableau_fractions_enonce=shuffle(tableau_fractions)
			texte = "";
			for (var j = 0; j < tableau_fractions_enonce.length; j++) {
				if (tableau_fractions_enonce[j][1]==1)
					texte+=`$${tableau_fractions_enonce[j][0]}\\quad\\text{;}\\quad$`
				else
					texte+=`$${tex_fraction(tableau_fractions_enonce[j][0],tableau_fractions_enonce[j][1])}\\quad\\text{;}\\quad$`
			}
			texte = texte.substring(0,texte.length-19)+"$" // Enlève les 21 derniers caractères (pour le ; de la fin)
			tableau_fractions.sort(compare_fractions)
			texte_corr ="";
			for (var j = 0; j < tableau_fractions_enonce.length; j++) {
				texte_corr+=tableau_fractions_enonce[j][2]
				texte_corr+="\\\\\\\\\\\\"
			}
			for (var j = 0; j < tableau_fractions.length; j++) {
				texte_corr+=tableau_fractions[j][3]
				if (j<tableau_fractions.length-1)
					texte_corr+=`$\\quad<\\quad$`
			}
			texte_corr+="\\\\\\\\\\\\"
			let texte_conclusion = ""
			for (var j = 0; j < tableau_fractions.length; j++) {
				if (tableau_fractions[j][1]==1)
					texte_conclusion+=`$${tableau_fractions[j][0]}\\quad<\\quad$`
				else
					texte_conclusion+=`$${tex_fraction(tableau_fractions[j][0],tableau_fractions[j][1])}\\quad<\\quad$`
			}
			texte_corr += "Finalement : $\\quad$ "+texte_conclusion.substring(0,texte_conclusion.length-12)+"$"

			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
}

function Exercice_additionner_des_fractions_5e(max=11){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ; // Correspond au facteur commun
	this.titre = "Additionner deux fractions (dénominateurs multiples)"
	this.consigne = "Calculer et donner le résultat sous la forme d'une fraction simplifiée"
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 5;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, c, d,texte, texte_corr, cpt=0; i < this.nb_questions;i++) {
			// les numérateurs
			a = randint (1,9);
			c = randint (1,9);
			// les dénominateurs
			b = randint(2,9);
			while (b==a){
				b = randint(2,9); // pas de fraction avec numérateur et dénominateur égaux
			}
			k = randint(2,this.sup);
			d = b*k
			ordre_des_fractions = randint(1,2)
			if (ordre_des_fractions==1) {
				texte = `$${tex_fraction(a,b)}+${tex_fraction(c,d)}=$`;
			} else {
				texte = texte = `$${tex_fraction(c,d)}+${tex_fraction(a,b)}=$`;
			}
			if (ordre_des_fractions==1) {
				texte_corr = `$${tex_fraction(a,b)}+${tex_fraction(c,d)}=${tex_fraction(a+mise_en_evidence('\\times'+k),b+mise_en_evidence('\\times'+k))}+${tex_fraction(c,d)}`
				texte_corr += `=${tex_fraction(a*k,b*k)}+${tex_fraction(c,d)}=${tex_fraction(a*k+`+`+c,d)}=${tex_fraction(a*k+c,d)}$`;
			} else {
				texte_corr = `$${tex_fraction(c,d)}+${tex_fraction(a,b)}=${tex_fraction(c,d)}+${tex_fraction(a+mise_en_evidence('\\times'+k),b+mise_en_evidence('\\times'+k))}`
				texte_corr += `=${tex_fraction(c,d)}+${tex_fraction(a*k,b*k)}=${tex_fraction(c+'+'+a*k,d)}=${tex_fraction(a*k+c,d)}$`;
			}
			// Est-ce que le résultat est simplifiable ?
			let s = pgcd(a*k+c,d);
			if ((a*k+c)%d==0) { // si le résultat est un entier
				texte_corr +=`$=${Algebrite.eval((a*k+c)/d)}$`
			} else if (s!=1) {
				texte_corr +=`$=${tex_fraction(Algebrite.eval((a*k+c)/s)+mise_en_evidence('\\times'+s),Algebrite.eval(d/s)+mise_en_evidence('\\times'+s))}=${tex_fraction(Algebrite.eval((a*k+c)/s),Algebrite.eval(d/s))}$`
			}
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
	this.besoin_formulaire_numerique = ['Valeur maximale du coefficient multiplicateur',99999];		
}

function Exercice_additionner_ou_soustraire_des_fractions_5e(max=11){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ; // Correspond au facteur commun
	this.sup2 = false // Si true alors il n'y aura que des soustractions
	this.titre = "Additionner ou soustraire deux fractions (dénominateurs multiples)"
	this.consigne = "Calculer et donner le résultat sous la forme d'une fraction simplifiée"
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 5;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, c, d,texte, texte_corr, cpt=0; i < this.nb_questions;i++) {
			// les numérateurs
			a = randint (1,9);
			c = randint (1,9);
			// les dénominateurs
			b = randint(2,9);
			while (b==a){
				b = randint(2,9); // pas de fraction avec numérateur et dénominateur égaux
			}
			k = randint(2,this.sup);
			d = b*k
			if (randint(1,2)==1 && !this.sup2) { //une addition
				ordre_des_fractions = randint(1,2)
				if (ordre_des_fractions==1) {
					texte = `$${tex_fraction(a,b)}+${tex_fraction(c,d)}=$`;
				} else {
					texte = texte = `$${tex_fraction(c,d)}+${tex_fraction(a,b)}=$`;
				}
				if (ordre_des_fractions==1) {
					texte_corr = `$${tex_fraction(a,b)}+${tex_fraction(c,d)}=${tex_fraction(a+mise_en_evidence('\\times'+k),b+mise_en_evidence('\\times'+k))}+${tex_fraction(c,d)}`
					texte_corr += `=${tex_fraction(a*k,b*k)}+${tex_fraction(c,d)}=${tex_fraction(a*k+`+`+c,d)}=${tex_fraction(a*k+c,d)}$`;
				} else {
					texte_corr = `$${tex_fraction(c,d)}+${tex_fraction(a,b)}=${tex_fraction(c,d)}+${tex_fraction(a+mise_en_evidence('\\times'+k),b+mise_en_evidence('\\times'+k))}`
					texte_corr += `=${tex_fraction(c,d)}+${tex_fraction(a*k,b*k)}=${tex_fraction(c+'+'+a*k,d)}=${tex_fraction(a*k+c,d)}$`;
				}
				// Est-ce que le résultat est simplifiable ?
				let s = pgcd(a*k+c,d);
				if (s!=1) {
					texte_corr +=`$=${tex_fraction(Algebrite.eval((a*k+c)/s)+mise_en_evidence('\\times'+s),Algebrite.eval(d/s)+mise_en_evidence('\\times'+s))}=${tex_fraction(Algebrite.eval((a*k+c)/s),Algebrite.eval(d/s))}$`
				}
			} else{ //une soustraction
				if ((a/b)>(c/d)) {
					texte = `$${tex_fraction(a,b)}-${tex_fraction(c,d)}=$`;
				} else {
					texte = texte = `$${tex_fraction(c,d)}-${tex_fraction(a,b)}=$`;
				}
				if ((a/b)>(c/d)) {
					texte_corr = `$${tex_fraction(a,b)}-${tex_fraction(c,d)}=${tex_fraction(a+mise_en_evidence('\\times'+k),b+mise_en_evidence('\\times'+k))}-${tex_fraction(c,d)}`
					texte_corr += `=${tex_fraction(a*k,b*k)}-${tex_fraction(c,d)}=${tex_fraction(a*k+`-`+c,d)}=${tex_fraction(a*k-c,d)}$`;
				} else {
					texte_corr = `$${tex_fraction(c,d)}-${tex_fraction(a,b)}=${tex_fraction(c,d)}-${tex_fraction(a+mise_en_evidence('\\times'+k),b+mise_en_evidence('\\times'+k))}`
					texte_corr += `=${tex_fraction(c,d)}-${tex_fraction(a*k,b*k)}=${tex_fraction(c+'-'+a*k,d)}=${tex_fraction(c-a*k,d)}$`;
				}
				// Est-ce que le résultat est simplifiable ?
				let s = pgcd(a*k-c,d);
				if (abs(a*k-c)%d==0){ //si la fraction peut-être un nombre entier
					texte_corr += `$=${Algebrite.eval((abs(a*k-c))/d)}$`
				} else if (s!=1) {
					texte_corr +=`$=${tex_fraction(Algebrite.eval((abs(a*k-c))/s)+mise_en_evidence('\\times'+s),Algebrite.eval(d/s)+mise_en_evidence('\\times'+s))}=${tex_fraction(Algebrite.eval((abs(a*k-c))/s),Algebrite.eval(d/s))}$`
				}
			}
				
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
	this.besoin_formulaire_numerique = ['Valeur maximale du coefficient multiplicateur',99999];	
	this.besoin_formulaire2_case_a_cocher = ['Uniquement des soustractions'];	
}

function Exercice_fractions_differentes_ecritures(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Décomposer une fraction (partie entière + fraction inférieure à 1) puis donner l'écriture décimale.";
	this.consigne = "Écrire sous la forme de la somme d'un nombre entier et d'une fraction inférieure à 1 puis donner l'écriture décimale";
	this.spacing = 2;
	this.spacing_corr = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2,',5'],[1,4,',25'],[3,4,',75'],[1,5,',2'],[2,5,',4'],[3,5,',6'],[4,5,',8'],
		[1,8,',125'],[3,8,',375'],[1,10,',1'],[3,10,',3'],[7,10,',7'],[9,10,',9']]; // Fractions irréductibles avec une écriture décimale exacte
		liste_fractions1 = [[1,2,',5'],[1,4,',25'],[3,4,',75'],[1,8,',125']];
		liste_fractions1.push(choice([[1,10,',1'],[2,10,',2'],[3,10,',3'],[7,10,',7'],[9,10,',9']]));
		liste_fractions1.push(choice([[1,5,',2'],[2,5,',4'],[3,5,',6'],[4,5,',8']])); // liste_fractions pour les 6 premières questions
		for (let i = 0, fraction, a, b, c, n, texte, texte_corr; i < this.nb_questions;i++) {
			if (i<6) {
				fraction = choice(liste_fractions1);
				enleve_element(liste_fractions1,fraction);
			}else{
				fraction = choice(liste_fractions);	
			}
			 //
			c = fraction[0];
			b = fraction[1];
			n = randint(1,4);
			a = n*b + c;
			ed = n + fraction[2];
			enleve_element(liste_fractions,fraction); // Il n'y aura pas 2 fois la même partie décimale
			texte = '$ '+ tex_fraction(a,b) + ' = \\phantom{0000} + '+ tex_fraction('\\phantom{00000000}','') +' =  $';
			texte_corr = '$ '+ tex_fraction(a,b) + ' = '+ n + '+' + tex_fraction(c,b) +' = '+ ed +' $';
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
}

function Exercice_fractions_decomposer(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Décomposer une fraction (partie entière + fraction inférieure à 1).";
	this.consigne = "Écrire sous la forme de la somme d'un nombre entier et d'une fraction inférieure à 1.";
	this.spacing = 2 ;
	this.spacing_corr = 2 ;
	this.sup = false ; // Donner l'écriture décimale

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2,',5'],[1,4,',25'],[3,4,',75'],[1,5,',2'],[2,5,',4'],[3,5,',6'],[4,5,',8'],
		[1,8,',125'],[3,8,',375'],[1,10,',1'],[3,10,',3'],[7,10,',7'],[9,10,',9']]; // Fractions irréductibles avec une écriture décimale exacte
		liste_fractions1 = [[1,2,',5'],[1,4,',25'],[3,4,',75'],[1,8,',125']];
		liste_fractions1.push(choice([[1,10,',1'],[2,10,',2'],[3,10,',3'],[7,10,',7'],[9,10,',9']]));
		liste_fractions1.push(choice([[1,5,',2'],[2,5,',4'],[3,5,',6'],[4,5,',8']])); // liste_fractions pour les 6 premières questions
		for (let i = 0, fraction, a, b, c, n, texte, texte_corr; i < this.nb_questions;i++) {
			if (i<6) {
				fraction = choice(liste_fractions1);
				enleve_element(liste_fractions1,fraction);
			}else{
				fraction = choice(liste_fractions);	
			}
			 //
			c = fraction[0];
			b = fraction[1];
			n = randint(1,4);
			a = n*b + c;
			ed = n + fraction[2];
			enleve_element(liste_fractions,fraction); // Il n'y aura pas 2 fois la même partie décimale
			texte = '$ '+ tex_fraction(a,b) + ' = \\phantom{0000} + '+ tex_fraction('\\phantom{00000000}','') +' $';
			texte_corr = '$ '+ tex_fraction(a,b) + ' = '+ n + '+' + tex_fraction(c,b) +' $';
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
}



function Exercice_conversions_de_longueurs(niveau=1){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = niveau ; // Niveau de difficulté de l'exercice 
	this.sup2 = false; // Avec des nombres décimaux ou pas
	this.titre = "Conversions de longueurs"
	this.consigne = 'Compléter'
	this.spacing = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let prefixe_multi = [['da',10],['h',100],['k',1000]]
		let prefixe_div = [['d',10],['c',100,],['m',1000]];
		let unite = 'm';
		let liste_unite = ['mm','cm','dm','m','dam','hm','km'];
		for (let i = 0, a, k, div, resultat, type_de_questions, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			if (this.sup < 5) {
				type_de_questions = this.sup;
			} else {
				type_de_questions = randint(1,4);
			}
			k = randint(0,2); // Choix du préfixe
			if (type_de_questions==1) { // niveau 1	
				div = false; // Il n'y aura pas de division
			} else if (type_de_questions==2) { // niveau 2
				div = true; // Avec des divisions
			} else {
				div = choice([true,false]) // Avec des multiplications ou des divisions
			} 

			if (this.sup2) { // Si la case pour les nombres décimaux est cochée
				a = choice([arrondi(randint(1,19)+randint(1,9)/10,1),arrondi(randint(1,9)/10,1),arrondi(randint(1,9)/100,2),arrondi(randint(1,9)+randint(1,9)/10+randint(1,9)/100,2)]);
				// XX,X 0,X 0,0X X,XX
			} else {
				a = choice([randint(1,9),randint(1,9)*10,randint(1,9)*100,randint(1,9)*10+randint(1,9)]);
				// X, X0, X00, XX
			}

			if (!div&&type_de_questions<4) { // Si il faut multiplier pour convertir
				
				resultat = Algebrite.eval(a*prefixe_multi[k][1]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
				texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]+unite) + ' = \\dotfill ' + tex_texte(unite) + '$';
				texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]+unite) + ' =  ' + tex_nombre(a) + '\\times' + tex_nombre(prefixe_multi[k][1]) + tex_texte(unite)
					 + ' = ' + tex_nombre(resultat) + tex_texte(unite) + '$';

			}else if(div&&type_de_questions<4) {
				resultat = Algebrite.eval(a/prefixe_div[k][1]).toString(); // Attention aux notations scientifiques pour 10e-8
				texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite) + ' = \\dotfill ' + tex_texte(unite) + '$';
				texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite) + ' =  ' + tex_nombre(a) + '\\div' + tex_nombre(prefixe_div[k][1]) + tex_texte(unite)
					 + ' = ' + tex_nombre(resultat) + tex_texte(unite) + '$';
			}else{ // pour type de question = 4
				let unite1 = randint(0,3);
				let ecart = randint(1,2); // nombre de multiplication par 10 pour passer de l'un à l'autre
				if (ecart>4-unite1) {
					ecart = 4-unite1;
				}
				let unite2 = unite1+ecart
				if (randint(0,1)>0) {
					resultat = Algebrite.eval(a*Math.pow(10,ecart));
					texte = '$ '+ tex_nombre(a) + tex_texte(liste_unite[unite2]) + ' = \\dotfill ' + tex_texte(liste_unite[unite1]) + '$';
					texte_corr = '$ '+ tex_nombre(a) + tex_texte(liste_unite[unite2]) + ' =  ' + tex_nombre(a) + '\\times' + tex_nombre(Math.pow(10,ecart)) + tex_texte(liste_unite[unite1])
					 + ' = ' + tex_nombre(resultat) + tex_texte(liste_unite[unite1]) + '$';	

				} else {
					resultat = Algebrite.eval(a/Math.pow(10,ecart));
					texte = '$ '+ tex_nombre(a) + tex_texte(liste_unite[unite1]) + ' = \\dotfill ' + tex_texte(liste_unite[unite2]) + '$';
					texte_corr = '$ '+ tex_nombre(a) + tex_texte(liste_unite[unite1]) + ' =  ' + tex_nombre(a) + '\\div' + tex_nombre(Math.pow(10,ecart)) + tex_texte(liste_unite[unite2])
					 + ' = ' + tex_nombre(resultat) + tex_texte(liste_unite[unite2]) + '$';
				}


				
			} 
				
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				if (sortie_html){
					texte = texte.replace('\\dotfill','................................................')
				}
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
 	this.besoin_formulaire_numerique = ['Niveau de difficulté',4,"1 : De dam, hm, km vers m\n\
2 : De dm, cm, mm vers m\n3 : Conversions en mètres\n4 : Toutes les conversions de longueurs"];		
	this.besoin_formulaire2_case_a_cocher = ['Avec des nombres décimaux'];
}


function Exercice_conversions(niveau=1){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = niveau ; // Niveau de difficulté de l'exercice 
	this.sup2 = false; // Avec des nombres décimaux ou pas
	this.titre = "Conversions de longueurs, masses, contenance, prix ou unités informatiques"
	this.consigne = 'Compléter'
	this.spacing = 2;
	this.correction_avec_des_fractions = false ;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let prefixe_multi = [['da',10],['h',100],['k',1000]]//['M',1000000],['G',1000000000],['T',1000000000000]];
		let prefixe_div = [['d',10],['c',100,],['m',1000]]; //['$\\mu{}$',1000000]];
		for (let i = 0, a, k, div, resultat, unite, type_de_questions, texte, texte_corr, liste_unite_info, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			if (this.sup < 5) {
				type_de_questions = this.sup;
			} else {
				type_de_questions = randint(1,4);
			}
			k = randint(0,2); // Choix du préfixe
			if (type_de_questions==1) { // niveau 1	
				div = false; // Il n'y aura pas de division
			} else if (type_de_questions==2) { // niveau 2
				div = true; // Avec des divisions
			} else if (type_de_questions==3) {
				div = choice([true,false]) // Avec des multiplications ou des divisions
			} else if (type_de_questions==4) {
				liste_unite_info = ['o','ko','Mo','Go','To'];
			}

			if (this.sup2) { // Si la case pour les nombres décimaux est cochée
				a = choice([arrondi(randint(1,19)+randint(1,9)/10,1),arrondi(randint(1,9)/10,1),arrondi(randint(1,9)/100,2),arrondi(randint(1,9)+randint(1,9)/10+randint(1,9)/100,2)]);
				// XX,X 0,X 0,0X X,XX
			} else {
				a = choice([randint(1,9),randint(1,9)*10,randint(1,9)*100,randint(1,9)*10+randint(1,9)]);
				// X, X0, X00, XX
			}

			if (!div&&type_de_questions<4) { // Si il faut multiplier pour convertir
				if (k<2) {		// Choix de l'unité
						unite = choice(['m','L','g'])
					}else if (k==2){
						if (sortie_html) {
							unite = choice(['m','L','g']) // pas de signe € pour KaTeX
						} else{
							unite = choice(['m','L','g','€'])	
						}
						
					}else {
						unite = 'o'
					}
				resultat = Algebrite.eval(a*prefixe_multi[k][1]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
				texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]+unite) + ' = \\dotfill ' + tex_texte(unite) + '$';
				texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]+unite) + ' =  ' + tex_nombre(a) + '\\times' + tex_nombre(prefixe_multi[k][1]) + tex_texte(unite)
					 + ' = ' + tex_nombre(resultat) + tex_texte(unite) + '$';

			}else if(div&&type_de_questions<4&&this.correction_avec_des_fractions) {
				unite = choice(['m','L','g'])
				resultat = Algebrite.eval(a/prefixe_div[k][1]).toString(); // Attention aux notations scientifiques pour 10e-8
				texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite) + ' = \\dotfill ' + tex_texte(unite) + '$';
				texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite) + ' =  ' + tex_fraction(tex_nombre(a),tex_nombre(prefixe_div[k][1])) + tex_texte(unite)
					 + ' = ' + tex_nombre(resultat) + tex_texte(unite) + '$';

			}else if(div&&type_de_questions<4) {
				unite = choice(['m','L','g'])
				resultat = Algebrite.eval(a/prefixe_div[k][1]).toString(); // Attention aux notations scientifiques pour 10e-8
				texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite) + ' = \\dotfill ' + tex_texte(unite) + '$';
				texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite) + ' =  ' + tex_nombre(a) + '\\div' + tex_nombre(prefixe_div[k][1]) + tex_texte(unite)
					 + ' = ' + tex_nombre(resultat) + tex_texte(unite) + '$';
			}else{ // pour type de question = 4
				alert('ok')
				let unite1 = randint(0,3);
				let ecart = randint(1,2); // nombre de multiplication par 1000 pour passer de l'un à l'autre
				if (ecart>4-unite1) {
					ecart = 4-unite1;
				}
				let unite2 = unite1+ecart
				if (randint(0,1)>0) {
					resultat = Algebrite.eval(a*Math.pow(10,3*ecart));
					texte = '$ '+ tex_nombre(a) + tex_texte(liste_unite_info[unite2]) + ' = \\dotfill ' + tex_texte(liste_unite_info[unite1]) + '$';
					texte_corr = '$ '+ tex_nombre(a) + tex_texte(liste_unite_info[unite2]) + ' =  ' + tex_nombre(a) + '\\times' + tex_nombre(Math.pow(10,3*ecart)) + tex_texte(liste_unite_info[unite1])
					 + ' = ' + tex_nombre(resultat) + tex_texte(liste_unite_info[unite1]) + '$';	

				} else {
					resultat = Algebrite.eval(a/Math.pow(10,3*ecart));
					texte = '$ '+ tex_nombre(a) + tex_texte(liste_unite_info[unite1]) + ' = \\dotfill ' + tex_texte(liste_unite_info[unite2]) + '$';
					texte_corr = '$ '+ tex_nombre(a) + tex_texte(liste_unite_info[unite1]) + ' =  ' + tex_nombre(a) + '\\div' + tex_nombre(Math.pow(10,3*ecart)) + tex_texte(liste_unite_info[unite2])
					 + ' = ' + tex_nombre(resultat) + tex_texte(liste_unite_info[unite2]) + '$';
				}


				
			} 
				
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				if (sortie_html){
					texte = texte.replace('\\dotfill','................................................')
				}
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
 	this.besoin_formulaire_numerique = ['Niveau de difficulté',5,"1 : De da, h, k vers l'unité de référence\n\
2 : De d, c, m vers l'unité de référence\n3 : Multiplications ou divisions vers l'unité de référence\n4 : Conversions avec les octets\n5: Toutes les conversions"];		
	this.besoin_formulaire2_case_a_cocher = ['Avec des nombres décimaux'];
}

function Exercice_conversions_aires(niveau=1){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = niveau ; // Niveau de difficulté de l'exercice 
	this.sup2 = false; // Avec des nombres décimaux ou pas
	this.titre = "Conversions d'aires"
	this.consigne = 'Compléter'
	this.spacing = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let prefixe_multi = [['da',100],['h',10000],['k',1000000]];
		let prefixe_div = [['d',100],['c',10000,],['m',1000000]]; 
		let unite = 'm';
		let liste_unite = ['mm','cm','dm','m','dam','hm','km'];
		for (let i = 0, a, k, div, resultat, type_de_questions, texte, texte_corr, liste_unite_info, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			if (this.sup < 6) {
				type_de_questions = this.sup;
			} else {
				type_de_questions = randint(1,5);
			}
			k = randint(0,2); // Choix du préfixe
			if (type_de_questions==1) { // niveau 1	
				div = false; // Il n'y aura pas de division
			} else if (type_de_questions==2) { // niveau 2
				div = true; // Avec des divisions
			} else if (type_de_questions==3) {
				div = choice([true,false]) // Avec des multiplications ou des divisions
			} else if (type_de_questions==4) { 
				div = choice([true,false]); // Avec des multiplications ou des divisions sans toujours revenir au m^2
			}

			if (this.sup2) { // Si la case pour les nombres décimaux est cochée
				a = choice([arrondi(randint(1,19)+randint(1,9)/10,1),arrondi(randint(1,9)/10,1),arrondi(randint(1,9)/100,2),arrondi(randint(1,9)+randint(1,9)/10+randint(1,9)/100,2)]);
				// XX,X 0,X 0,0X X,XX
			} else {
				a = choice([randint(1,9),randint(1,9)*10,randint(1,9)*100,randint(1,9)*10+randint(1,9)]);
				// X, X0, X00, XX
			}

			if (!div&&type_de_questions<4) { // Si il faut multiplier pour convertir
				
				
				resultat = Algebrite.eval(a*prefixe_multi[k][1]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
				texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]+unite) + '^2' + ' = \\dotfill ' + tex_texte(unite)  + '^2' + '$';
				texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]+unite)+ '^2' + ' =  ' + tex_nombre(a) + '\\times' + tex_nombre(prefixe_multi[k][1]) + tex_texte(unite)  + '^2'
					 + ' = ' + tex_nombre(resultat) + tex_texte(unite)+ '^2' + '$';

			}else if(div&&type_de_questions<4) {
				k = randint(0,1); // Pas de conversions de mm^2 en m^2 avec des nombres décimaux car résultat inférieur à 10e-8
				resultat = Algebrite.eval(a/prefixe_multi[k][1]).toString(); // Attention aux notations scientifiques pour 10e-8
				texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite)+ '^2' + ' = \\dotfill ' + tex_texte(unite)  + '^2' + '$';
				texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite)+ '^2' + ' =  ' + tex_nombre(a) + '\\div' + tex_nombre(prefixe_div[k][1]) + tex_texte(unite)  + '^2'
					 + ' = ' + tex_nombre(resultat) + tex_texte(unite)  + '^2' + '$';
			}else if(type_de_questions==4){ 
				let unite1 = randint(0,3);
				let ecart = randint(1,2); // nombre de multiplication par 10 pour passer de l'un à l'autre
				if (ecart>4-unite1) {
					ecart = 4-unite1;
				}
				let unite2 = unite1+ecart
				if (randint(0,1)>0) {
					resultat = Algebrite.eval(a*Math.pow(10,2*ecart));
					texte = '$ '+ tex_nombre(a) + tex_texte(liste_unite[unite2]) + '^2' + ' = \\dotfill ' + tex_texte(liste_unite[unite1]) + '^2' + '$';
					texte_corr = '$ '+ tex_nombre(a) + tex_texte(liste_unite[unite2]) + '^2' + ' =  ' + tex_nombre(a) + '\\times' + tex_nombre(Math.pow(10,2*ecart)) + tex_texte(liste_unite[unite1]) + '^2'
					 + ' = ' + tex_nombre(resultat) + tex_texte(liste_unite[unite1]) + '^2' + '$';	

				} else {
					resultat = Algebrite.eval(a/Math.pow(10,2*ecart));
					texte = '$ '+ tex_nombre(a) + tex_texte(liste_unite[unite1]) + '^2' + ' = \\dotfill ' + tex_texte(liste_unite[unite2]) + '^2' + '$';
					texte_corr = '$ '+ tex_nombre(a) + tex_texte(liste_unite[unite1]) + '^2' + ' =  ' + tex_nombre(a) + '\\div' + tex_nombre(Math.pow(10,2*ecart)) + tex_texte(liste_unite[unite2]) + '^2'
					 + ' = ' + tex_nombre(resultat) + tex_texte(liste_unite[unite2]) + '^2' + '$';
				}
				
			} else if(type_de_questions==5) { // Pour type_de_questions==5
				prefixe_multi = [['ha',10000],['a',100]];
				k = randint(0,1)
				resultat = Algebrite.eval(a*prefixe_multi[k][1]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
				texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]) + ' = \\dotfill ' + tex_texte(unite)  + '^2' + '$';
				texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]) + ' =  ' + tex_nombre(a) + '\\times' + tex_nombre(prefixe_multi[k][1]) + tex_texte(unite)  + '^2'
					 + ' = ' + tex_nombre(resultat) + tex_texte(unite)+ '^2' + '$';
			}
				
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				if (sortie_html){
					texte = texte.replace('\\dotfill','................................................')
				}
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
 	this.besoin_formulaire_numerique = ['Niveau de difficulté',6,"1 : Conversions en m² avec des multiplications\n\
2 : Conversions en m² avec des divisions\n3 : Conversions en m² avec des multiplications ou divisions\n4 : Conversions avec des multiplications ou divisions\n\
5 : Conversions d'hectares et ares en m² \n6 : Toutes les conversions"];		
	this.besoin_formulaire2_case_a_cocher = ['Avec des nombres décimaux'];
}


function Exercice_perimetres_et_aires(difficulte=1){
//Calculer le périmètre et l'aire de figures 
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = difficulte ;
	this.titre = "Calculs de périmètres et d'aires";
	this.consigne = 'Pour chacune des figures, calculer son périmètre puis son aire (valeur exacte et si nécessaire valeur approchée au dixième près).';
	this.spacing = 1;


	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		
		let triplets_pythagoriciens = [[3,4,5],[6,8,10],[15,8,17],[24,10,26],[5,12,13],[12,16,20],[21,20,29],[9,40,41]];
		let type_de_questions_disponibles = ['carre','rectangle','triangle_rectangle','cercle']
		if (this.sup==1) {
			enleve_element(type_de_questions_disponibles,'cercle')
		} else if (this.sup==2){
			type_de_questions_disponibles = ['cercle']
		}
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			type_de_questions = liste_type_de_questions[i];
			switch (type_de_questions){
				case 'carre' :
					let cote = randint(2,11);
					let nom_carre = polygone(4);
					if (choice([true,false])){ // 2 énoncés possibles équiprobables
						texte = `Un carré $${nom_carre}$ de $${cote}$ cm de côté .`;
					} else {
						texte = `Un carré $${nom_carre}$ tel que $${nom_carre[0]+nom_carre[1]} = ${cote}$ cm.`;
					}
					 
					texte_corr = `$\\mathcal{P}_{${nom_carre}}=4\\times${cote}~\\text{cm}=${4*cote}~\\text{cm}$\\\\\n`;
					texte_corr += `$\\mathcal{A}_{${nom_carre}}=${cote}~\\text{cm}\\times${cote}~\\text{cm}=${cote*cote}~\\text{cm}^2$`;
					break ;
				case 'rectangle' : 
					let L = randint(3,11);
					let l = randint(2,L-1);
					let nom_rectangle = polygone(4);
					if (choice([true,false])){ // 2 énoncés possibles équiprobables
							texte = `Un rectangle $${nom_rectangle}$ de $${L}$ cm de longueur et de $${l}$ cm de largeur.`;
						} else{
							texte = `Un rectangle $${nom_rectangle}$ tel que $${nom_rectangle[0]+nom_rectangle[1]+' = '+L}$ cm et $${nom_rectangle[1]+nom_rectangle[2]+' = '+l}$ cm.`;
						}
					 
					texte_corr = `$\\mathcal{P}_{${nom_rectangle}}=(${L}~\\text{cm}+${l}~\\text{cm})\\times2=${(L+l)*2}~\\text{cm}$\\\\\n`;
					texte_corr += `$\\mathcal{A}_{${nom_rectangle}}=${L}~\\text{cm}\\times${l}~\\text{cm}=${L*l}~\\text{cm}^2$`;
					break ;
				case 'triangle_rectangle' :
					let triplet = choice(triplets_pythagoriciens);
					enleve_element(triplets_pythagoriciens,triplet)
					let a = triplet[0];
					let b = triplet[1];
					let c = triplet[2];
					let nom_triangle = polygone(3);
					if (choice([true,false])){
						texte = `Un triangle $${nom_triangle}$ rectangle en $${nom_triangle[1]}$ tel que $${nom_triangle[0]+nom_triangle[1]+' = '+a}$ cm, $${nom_triangle[1]+nom_triangle[2]+' = '+b}$ cm\
 et $${nom_triangle[0]+nom_triangle[2]+' = '+c}$ cm.`;
					} else {
						texte = `Un triangle rectangle $${nom_triangle}$ a pour côtés : $${a}$ cm, $${c}$ cm et $${b}$ cm.`;	
					}
					
					texte_corr = `$\\mathcal{P}_{${nom_triangle}}=${a}~\\text{cm}+${b}~\\text{cm}+${c}~\\text{cm}=${a+b+c}~\\text{cm}$\\\\\n`;
					texte_corr += `$\\mathcal{A}_{${nom_triangle}}=${a}~\\text{cm}\\times${b}~\\text{cm}\\div2=${Algebrite.eval(a*b/2)}~\\text{cm}^2$`;
					break ;
				case 'cercle' : 
					let R = randint(3,11)
					let donne_le_diametre = choice([true,false])
					if (donne_le_diametre) {
						texte = `Un cercle de $${2*R}$ cm de diamètre.`;
						texte_corr = `Le diamètre est de $${2*R}$ cm donc le rayon est de $${R}$~cm.\\\\\n`	
					} else {
						texte = `Un cercle de $${R}$ cm de rayon.`;
						texte_corr = '';	
					}
					 
					texte_corr += `$\\mathcal{P}=2\\times${R}\\times\\pi~\\text{cm}=${2*R}\\pi~\\text{cm}\\approx${arrondi_virgule(2*R*Math.PI,1)}~\\text{cm}$\\\\\n`;
					texte_corr += `$\\mathcal{A}=${R}\\times${R}\\times\\pi~\\text{cm}^2=${R*R}\\pi~\\text{cm}^2\\approx${arrondi_virgule(R*R*Math.PI,1)}~\\text{cm}^2$`;
					break ;
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,'1 : Carré, rectangle et triangle rectangle\n2: Cercles\n3: Mélangé'] 
}

function Exercice_simplification_somme_algebrique(max=20){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max;
	this.titre = "Simplifier l'écriture d'une somme de 2 relatifs et calculer"
	this.consigne = 'Simplifier puis calculer'
	this.spacing = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, s, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			a = randint(1,this.sup)*choice([-1,1]);
			b = randint(1,this.sup)*choice([-1,1]);
			s = choice([-1,1]) // + ou -
			
			if (s==1){
				texte = '$ '+ ecriture_nombre_relatif(a) + ' + ' + ecriture_nombre_relatif(b) + ' = \\dotfill $';
				texte_corr = '$ '+ ecriture_nombre_relatif(a) + ' + ' + ecriture_nombre_relatif(b) + ' = ' + a + ecriture_algebrique(s*b) +' = ' + (a+b) + ' $';	
			} else {
				texte = '$ '+ ecriture_nombre_relatif(a) + ' - ' + ecriture_nombre_relatif(b) + ' = \\dotfill $';
				texte_corr = '$ '+ ecriture_nombre_relatif(a) + ' - ' + ecriture_nombre_relatif(b) + ' = ' + a + ecriture_algebrique(s*b) +' = ' + (a-b) + ' $';	
			}
						
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];
}

function Exercice_additions_et_soustraction_de_relatifs(max=20){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ;
	this.sup2 = false; // écriture simplifiée
	this.titre = "Additions et soustractions de nombres relatifs"
	this.consigne = 'Calculer'
	this.spacing = 2;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			a = randint(1,this.sup)*choice([-1,1]);
			b = randint(1,this.sup)*choice([-1,1]);
			if (a==1 & b==1) { // On s'assure que les 3 premières termes n'ont pas le même signe
				c = -1
			} else if (a==-1 & b==-1) {
				c = 1
			}
			else {
				c = randint(1,this.sup)*choice([-1,1]);	
			}
			d = randint(1,this.sup)*choice([-1,1]);
			e = randint(1,this.sup)*choice([-1,1]);
			s1 = choice([-1,1])
			s2 = choice([-1,1])
			if (s1==1 & s2==1){ // On s'assure que les 3 premières opérations ne sont pas identiques
				s3=-1
			} else if (s1==-1 & s2==-1){
				s3=1
			} else {
				s3 = choice([-1,1])	
			}
			s4 = choice([-1,1])
			if (this.sup2){
				texte = `$ ${lettre_depuis_chiffre(i+1)} = ${a}${ecriture_algebrique(b)}${ecriture_algebrique(c)}${ecriture_algebrique(d)}${ecriture_algebrique(e)} = \\dotfill $`;
				if (!sortie_html){
					texte += `\\\\\n$ ${lettre_depuis_chiffre(i+1)} = \\dotfill $`
				}
				texte_corr = `$ ${lettre_depuis_chiffre(i+1)} =  ${a}${ecriture_algebrique(b)}${ecriture_algebrique(c)}${ecriture_algebrique(d)}${ecriture_algebrique(e)} = ${somme_des_termes_par_signe([a,b,c,d,e])[0]}${ecriture_algebrique(somme_des_termes_par_signe([a,b,c,d,e])[1])} = ${a+b+c+d+e} $`;		
			} else {
				texte = `$ ${lettre_depuis_chiffre(i+1)} =  ${ecriture_nombre_relatif(a)}${signe(s1)}${ecriture_nombre_relatif(b)}${signe(s2)}${ecriture_nombre_relatif(c)}${signe(s3)}${ecriture_nombre_relatif(d)}${signe(s4)}${ecriture_nombre_relatif(e)} = \\dotfill $`;
				if (!sortie_html){
					texte += `\\\\\n$ ${lettre_depuis_chiffre(i+1)} = \\dotfill $`	
				}
				texte_corr = `$ ${lettre_depuis_chiffre(i+1)} =  ${ecriture_nombre_relatif(a)}${signe(s1)}${ecriture_nombre_relatif(b)}${signe(s2)}${ecriture_nombre_relatif(c)}${signe(s3)}${ecriture_nombre_relatif(d)}${signe(s4)}${ecriture_nombre_relatif(e)} $`;
				texte_corr += `\\\\\n$ ${lettre_depuis_chiffre(i+1)} = ${ecriture_nombre_relatif(a)}+${ecriture_nombre_relatif(s1*b)}+${ecriture_nombre_relatif(s2*c)}+${ecriture_nombre_relatif(s3*d)}+${ecriture_nombre_relatif(s4*e)} $`;
				texte_corr += `\\\\\n$ ${lettre_depuis_chiffre(i+1)} = ${a+s1*b+s2*c+s3*d+s4*e} $`;
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu_sans_numero(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];
	this.besoin_formulaire2_case_a_cocher = ['Avec des écritures simplifiées'];	
}



function Exercice_additions_de_5_relatifs(max=20){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ;
	this.sup2 = false; // écriture simplifiée
	this.titre = "Additions de 5 nombres relatifs"
	this.consigne = 'Calculer'
	this.spacing = 2;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			a = randint(1,this.sup)*choice([-1,1]);
			b = randint(1,this.sup)*choice([-1,1]);
			if (a==1 & b==1) { // On s'assure que les 3 premières termes n'ont pas le même signe
				c = -1
			} else if (a==-1 & b==-1) {
				c = 1
			}
			else {
				c = randint(1,this.sup)*choice([-1,1]);	
			}
			d = randint(1,this.sup)*choice([-1,1]);
			e = randint(1,this.sup)*choice([-1,1]);
			s1 = 1; // Que des additions
			s2 = 1;
			s3 = 1;
			s4 = 1;
			if (this.sup2){
				texte = `$ ${lettre_depuis_chiffre(i+1)} = ${a}${ecriture_algebrique(b)}${ecriture_algebrique(c)}${ecriture_algebrique(d)}${ecriture_algebrique(e)} = \\dotfill $`;
				if (!sortie_html){
					texte += `\\\\\n$ ${lettre_depuis_chiffre(i+1)} = \\dotfill $`
				}
				texte_corr = `$ ${lettre_depuis_chiffre(i+1)} =  ${a}${ecriture_algebrique(b)}${ecriture_algebrique(c)}${ecriture_algebrique(d)}${ecriture_algebrique(e)} = ${somme_des_termes_par_signe([a,b,c,d,e])[0]}${ecriture_algebrique(somme_des_termes_par_signe([a,b,c,d,e])[1])} = ${a+b+c+d+e} $`;		
			} else {
				texte = `$ ${lettre_depuis_chiffre(i+1)} =  ${ecriture_nombre_relatif(a)}${signe(s1)}${ecriture_nombre_relatif(b)}${signe(s2)}${ecriture_nombre_relatif(c)}${signe(s3)}${ecriture_nombre_relatif(d)}${signe(s4)}${ecriture_nombre_relatif(e)} = \\dotfill $`;
				if (!sortie_html){
					texte += `\\\\\n$ ${lettre_depuis_chiffre(i+1)} = \\dotfill $`	
				}
				texte_corr = `$ ${lettre_depuis_chiffre(i+1)} =  ${ecriture_nombre_relatif(a)}${signe(s1)}${ecriture_nombre_relatif(b)}${signe(s2)}${ecriture_nombre_relatif(c)}${signe(s3)}${ecriture_nombre_relatif(d)}${signe(s4)}${ecriture_nombre_relatif(e)} $`;
				//A faire regroupement des termes de même signe texte_corr += `\\\\\n$ ${lettre_depuis_chiffre(i+1)} = ${ecriture_nombre_relatif(a)}+${ecriture_nombre_relatif(s1*b)}+${ecriture_nombre_relatif(s2*c)}+${ecriture_nombre_relatif(s3*d)}+${ecriture_nombre_relatif(s4*e)} $`;
				texte_corr += `\\\\\n$ ${lettre_depuis_chiffre(i+1)} = ${a+s1*b+s2*c+s3*d+s4*e} $`;
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu_sans_numero(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];
	this.besoin_formulaire2_case_a_cocher = ['Avec des écritures simplifiées'];	
}

function Exercice_developper(difficulte=1){
//Calculer le périmètre et l'aire de figures 
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = difficulte ;
	this.titre = "Développer une expression littérale";
	this.consigne = 'Développer.';
	this.spacing = 1;


	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		
		let lettre = ['x','y','z','t','a','b','c'];
		let type_de_questions_disponibles = ['simple','simple','simple','simple2','x_en_facteur','developper_et_reduire']
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			type_de_questions = liste_type_de_questions[i];
			let k = randint(2,11);
			if (this.sup>1){ // si difficulté 2, k peut être négatif
				k = k*choice([-1,1])
			}
			let a = randint(1,9);
			let b = randint(1,9)*choice([-1,1]);
			let inconnue = choice(lettre);
			switch (type_de_questions){
				case 'simple' :
					if (a==1){ // ne pas écrire 1x
						texte = `$${lettre_depuis_chiffre(i+1)}=${k}(${inconnue}${ecriture_algebrique(b)})$`;
					} else {
						texte = `$${lettre_depuis_chiffre(i+1)}=${k}(${a}${inconnue}${ecriture_algebrique(b)})$`;
					}
					
					if (a==1){ // ne pas écrire 1x
						texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}(${inconnue}${ecriture_algebrique(b)})=${k}
						\\times ${inconnue}${signe(k*b)}${abs(k)}\\times${abs(b)}=${k*a}${inconnue}${ecriture_algebrique(k*b)}$`;
					} else {
						texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}(${a}${inconnue}${ecriture_algebrique(b)})=${k}
						\\times ${a}${inconnue}${signe(k*b)}${abs(k)}\\times${abs(b)}=${k*a}${inconnue}${ecriture_algebrique(k*b)}$`;

					}
					break ;
				case 'simple2' :
					if (a==1){ // ne pas écrire 1x
						texte = `$${lettre_depuis_chiffre(i+1)}=(${inconnue}${ecriture_algebrique(b)})\\times${ecriture_parenthese_si_negatif(k)}$`;
					} else {
						texte = `$${lettre_depuis_chiffre(i+1)}=(${a}${inconnue}${ecriture_algebrique(b)})\\times${ecriture_parenthese_si_negatif(k)}$`;
					}
					
					if (a==1){ // ne pas écrire 1x
						texte_corr = `$${lettre_depuis_chiffre(i+1)}=(${inconnue}${ecriture_algebrique(b)})\\times${k}=${k}
						\\times ${inconnue}${signe(k*b)}${abs(k)}\\times${abs(b)}=${k*a}${inconnue}${ecriture_algebrique(k*b)}$`;
					} else {
						texte_corr = `$${lettre_depuis_chiffre(i+1)}=(${a}${inconnue}${ecriture_algebrique(b)})\\times${k}=${k}
						\\times ${a}${inconnue}${signe(k*b)}${abs(k)}\\times${abs(b)}=${k*a}${inconnue}${ecriture_algebrique(k*b)}$`;

					}
					break ;
				case 'x_en_facteur' :
					if (a==1){ // ne pas écrire 1x
						texte = `$${lettre_depuis_chiffre(i+1)}=${k}${inconnue}(${inconnue}${ecriture_algebrique(b)})$`;
					} else {
						texte = `$${lettre_depuis_chiffre(i+1)}=${k}${inconnue}(${a}${inconnue}${ecriture_algebrique(b)})$`;
					}
					
					if (a==1){ // ne pas écrire 1x
						texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}${inconnue}(${inconnue}${ecriture_algebrique(b)})=${k}${inconnue}\\times ${inconnue} ${signe(k*b)}${k}${inconnue}\\times ${abs(b)}=${k*a}${inconnue}^2${ecriture_algebrique(k*b)}${inconnue}$`;
					} else {
						texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}${inconnue}(${a}${inconnue}${ecriture_algebrique(b)})=${k}${inconnue}\\times ${a}${inconnue} ${signe(k*b)}${k}${inconnue}\\times ${abs(b)}=${k*a}${inconnue}^2${ecriture_algebrique(k*b)}${inconnue}$`;

					}
					break ;
				case 'developper_et_reduire' :
					let c = randint(2,9);
					if (a==1){ // ne pas écrire 1x
						texte = `$${lettre_depuis_chiffre(i+1)}=${k}(${inconnue}${ecriture_algebrique(b)})+${c}$`;
					} else {
						texte = `$${lettre_depuis_chiffre(i+1)}=${k}(${a}${inconnue}${ecriture_algebrique(b)})+${c}$`;
					}
					
					if (a==1){ // ne pas écrire 1x
						texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}(${inconnue}${ecriture_algebrique(b)})+${c}=${k*a}${inconnue}${ecriture_algebrique(k*b)}+${c}=${k*a}${inconnue}${ecriture_algebrique(k*b+c)}$`;
					} else {
						texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}(${a}${inconnue}${ecriture_algebrique(b)})+${c}=${k*a}${inconnue}${ecriture_algebrique(k*b)}+${c}=${k*a}${inconnue}${ecriture_algebrique(k*b+c)}$`;

					}
					break ;
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',2,'1 : Multiplication par un facteur positif\n2: Multiplication par un facteur relatif'] 
}


function Exercice_substituer(difficulte=1){
//Calculer le périmètre et l'aire de figures 
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = difficulte ;
	this.titre = "Substitution";
	this.consigne = 'Calculer';
	this.spacing = 1;
	this.consigne_modifiable = false;


	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		
		let type_de_questions_disponibles = [1,2,3,4,5,6,7,8,9,10]
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let k = randint(2,9);
		let k2 = randint(2,9);
		let k3 = randint(2,9);
		if (this.sup>1){ // si difficulté 2, k, k2 et k3 peut être négatif !!! La correction est à faire. Exercice non fini
			k = k*choice([-1,1]);
			k2 = k2*choice([-1,1]);
			k3 = k3*choice([-1,1]);
		}
		let valeurs_possibles = range(9,[0,1]) // Toutes les valeurs de 2 à 9
		let x = choice(valeurs_possibles);
		enleve_element(valeurs_possibles,x);
		let y = choice(valeurs_possibles);
		enleve_element(valeurs_possibles,y);
		let z = choice(valeurs_possibles);
		// x, y et z sont différents
		this.consigne = `Calculer pour $x=${x}$, $y=${y}$ et $z=${z}$.`
		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			type_de_questions = liste_type_de_questions[i];
			switch (type_de_questions){
				case 1 :
					texte = `$${lettre_depuis_chiffre(i+1)}=${k}x$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}x=${k}\\times ${x}=${k*x}$`;
					break ;
				case 2 :
					texte = `$${lettre_depuis_chiffre(i+1)}=${k}x-y$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}x-y=${k}\\times ${x}-${y}=${k*x-y}$`;
					break ;
				case 3 :
					texte = `$${lettre_depuis_chiffre(i+1)}=xy$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=xy=${x}\\times ${y}=${x*y}$`;
					break ;
				case 4 :
					texte = `$${lettre_depuis_chiffre(i+1)}=x+y$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=x+y=${x}+${y}=${x+y}$`;
					break ;
				case 5 :
					texte = `$${lettre_depuis_chiffre(i+1)}=xy+z$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=xy+z=${x}\\times ${y}+${z}=${x*y+z}$`;
					break ;
				case 6 :
					texte = `$${lettre_depuis_chiffre(i+1)}=x(y+z)$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=x(y+z)=${x}\\times(${y}+${z})=${x*(y+z)}$`;
					break ;
				case 7 :
					texte = `$${lettre_depuis_chiffre(i+1)}=x^2+${k}y$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=x^2+${k}y=${x}^2+${k}\\times ${y}=${x*x}+${k}\\times ${y}=${x*x+k*y}$`;
					break ;
				case 8 :
					texte = `$${lettre_depuis_chiffre(i+1)}=x^2+y^2$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=x^2+y^2=${x}^2+${y}^2=${x*x}+${y*y}=${x*x+y*y}$`;
					break ;
				case 9 :
					texte = `$${lettre_depuis_chiffre(i+1)}=${k}x^2+y^2$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}x^2+y^2=${k}\\times ${x}^2+${y}^2=${k}\\times ${x*x}+${y*y}=${k*x*x+y*y}$`;
					break ;
				case 10 :
					texte = `$${lettre_depuis_chiffre(i+1)}=${k}x^2+${k2}x+${k3}$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}x^2+${k2}x+${k3}=${k}\\times ${x}^2+${k2}\\times ${x}+${k3}=${k}\\times ${x*x}+${k2}\\times ${x}+${k3}=${k*x*x+k2*x+k3}$`;
					break ;
				
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',2,'1 : Multiplication par un facteur positif\n2: Multiplication par un facteur relatif'] 
}




function Exercice_equation1(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Résolution d'équation (1)"
	this.consigne = 'Résoudre les équations suivantes'
	this.spacing = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			a = randint(1,13);
			b = randint(1,13);
			k = choice([[-1,-1],[-1,1],[1,-1],[1,1]]); 
			a = a*k[0];
			b = b*k[1];
			texte = '$ '+ Algebrite.run(a+'*x+('+b+')') + ' = 0 $';
			texte_corr = '$ '+a+'x'+ecriture_algebrique(b)+' = 0$\n\n'+'$ '+a+'x'+ecriture_algebrique(b)+ecriture_algebrique(-b)+' = 0'+ecriture_algebrique(-b)+'$\n\n';
			texte_corr += '$ x = '+ tex_fraction(-1*b,a);
			if (pgcd(Math.abs(a),Math.abs(b))>1){
				texte_corr += ' = ' + math.parse(Algebrite.run(-1*b+'/('+a+')')).toTex()+'$'
			} else {
				texte_corr += '$'
			}
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];		
}


function Exercice_ecriture_decimale_a_partir_de_fraction_decimale(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Donner l'écriture décimale d'une fraction décimale"
	this.consigne = "Donner l'écriture décimale"
	this.spacing = 2;
	this.spacing_corr = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt<50;){
			a = choice([randint(2,9),randint(11,99),randint(1,9)*100+randint(1,9),randint(1,9)*1000+randint(1,9)],randint(101,999));
			// X, XX, X0X, X00X,XXX
			b = choice([10,100,1000])
			texte = '$ '+ tex_fraction(tex_nombre(a),tex_nombre(b)) + ' = \\dotfill $';
			texte_corr = '$ '+ tex_fraction(tex_nombre(a),tex_nombre(b)) + ' = ' + tex_nombre(Algebrite.eval(a/b)) +' $';
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];	
}

function Exercice_multiplier_ou_diviser_un_nombre_entier_par_10_100_1000(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Multiplier ou diviser un nombre entier par 10, 100 ou 1 000"
	this.consigne = "Donner l'écriture décimale"
	this.spacing = 2;
	this.spacing_corr = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt<50;){
			a = choice([randint(2,9),randint(11,99),randint(1,9)*100+randint(1,9),randint(1,9)*1000+randint(1,9)],randint(101,999));
			// X, XX, X0X, X00X,XXX
			b = choice([10,100,1000])
			if (choice([true,false])) {
				texte = '$ '+ tex_fraction(tex_nombre(a),tex_nombre(b)) + ' = \\dotfill $';
				texte_corr = '$ '+ tex_fraction(tex_nombre(a),tex_nombre(b)) + ' = ' + tex_nombre(Algebrite.eval(a/b)) +' $';
			} else {
				texte = '$ '+ tex_nombre(a)+ '\\times' +tex_nombre(b) + ' = \\dotfill $';
				texte_corr = '$ '+ tex_nombre(a)+ '\\times' +tex_nombre(b) + ' = ' + tex_nombre(Algebrite.eval(a*b)) +' $';
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];	
}
unction Fraction_d_un_nombre(max=11){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Calculer la fraction d'un nombre"
	this.nb_questions = 5;
	this.consigne = "Calculer"
	this.spacing = 2;
	this.spacing_corr = 2;
	this.sup = max;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
		[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],
		[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]] // Couples de nombres premiers entre eux

		for (let i = 0, a, b, k, n, fraction, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt<50;){
			fraction = choice(liste_fractions);
			a = fraction[0];
			b = fraction[1];
			k = randint(1,this.sup);
			n = b*k; 
			texte = `$${tex_fraction(a,b)}\\times${n}=$`;
			if (a==1){
				texte_corr = `$${tex_fraction(a,b)}\\times${n}=${n}\\div${b}=${Algebrite.eval(n/b)}$`;	
			} else {
				texte_corr = `$${tex_fraction(a,b)}\\times${n}=(${n}\\div${b})\\times${a}=${Algebrite.eval(n/b)}\\times${a}=${Algebrite.eval(n/b*a)}$`;
			}
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];	
}

function Pourcentage_d_un_nombre(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Calculer le pourcentage d'un nombre de tête"
	this.nb_questions = 5;
	this.consigne = "Calculer"
	this.spacing = 2;
	this.spacing_corr = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_pourcentages = [10,20,30,40,50];

		for (let i = 0, p, n, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt<50;){
			p = choice(liste_pourcentages)
			n = choice([randint(2,9),randint(2,9)*10,randint(1,9)*10+randint(1,2)]); 
			texte = `$${p}~\\%~\\text{de }${n}$`;
			if (p==50) {
			texte_corr = `$${p}~\\%~\\text{de }${n}=${tex_fraction(1,2)}\\times${n}=${tex_nombre(Algebrite.eval(n/2))}$`				
			} else {
			texte_corr = `$${p}~\\%~\\text{de }${n}=${tex_fraction(p,100)}\\times${n}=(${p}\\times${n})\\div100=${tex_nombre(p*n)}\\div100=${tex_nombre(Algebrite.eval(p*n/100))}$`				
			}
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];	
}
function Probleme_course(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Problème - Les courses"
	this.consigne = ""
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 1;
	this.nb_questions_modifiable = false ;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
			let prenom = choice(['Benjamin','Léa','Aude','Julie','Corinne','Mehdi','Joaquim']);
			let masse_en_kg_de_aliment1 = Algebrite.eval(randint(2,5)+randint(1,9)/10);
			let prix_aliment1 = Algebrite.eval(randint(2,4)+randint(1,9)/10);
			let aliment1 = choice(['courgettes','carottes','pommes']);
			let masse_en_g_de_aliment2 = randint(21,97)*10;
			let prix_aliment2 = Algebrite.eval(randint(12,23)+randint(1,9)/10);
			let aliment2 = choice(['boeuf','veau','poulet']); 

			texte = `${prenom} achète ${tex_nombre(masse_en_kg_de_aliment1)} kg de ${aliment1} à ${tex_prix(prix_aliment1)} €/kg `
			texte += `et ${masse_en_g_de_aliment2} g de ${aliment2} à ${tex_prix(prix_aliment2)} €/kg. Quel est le prix total à payer ?`
			texte_corr = `Prix des ${aliment1} : ${tex_nombre(masse_en_kg_de_aliment1)} kg × ${tex_prix(prix_aliment1)} €/kg = ${tex_prix(Algebrite.eval(masse_en_kg_de_aliment1*prix_aliment1))} €`+'\\\\'
			texte_corr += `\\\\`;
			texte_corr += `Prix du ${aliment2} : ${tex_nombre(Algebrite.eval(masse_en_g_de_aliment2/1000))} kg × ${tex_prix(prix_aliment2)} €/kg = ${tex_nombre(Algebrite.eval(masse_en_g_de_aliment2*prix_aliment2/1000))} € `+'\\\\'
			texte_corr += `\\\\`;
			texte_corr += `Prix total à payer : ${tex_nombre(Algebrite.eval(masse_en_kg_de_aliment1*prix_aliment1))} € + ${tex_nombre(Algebrite.eval(masse_en_g_de_aliment2*prix_aliment2/1000))} € ≈ ${arrondi_virgule(Algebrite.eval(masse_en_kg_de_aliment1*prix_aliment1+masse_en_g_de_aliment2*prix_aliment2/1000))} €`
			
			if (!sortie_html) {
				texte_corr = `Prix des ${aliment1} : $${tex_nombre(masse_en_kg_de_aliment1)}~\\text{kg}\\times${tex_prix(prix_aliment1)}~\\text{\\euro{}/kg} = ${tex_prix(Algebrite.eval(masse_en_kg_de_aliment1*prix_aliment1))}~\\text{\\euro}$`+'\\\\'
				texte_corr += `Prix du ${aliment2} : $${tex_nombre(Algebrite.eval(masse_en_g_de_aliment2/1000))}~\\text{kg}\\times${tex_prix(prix_aliment2)}~\\text{\\euro{}/kg} = ${tex_nombre(Algebrite.eval(masse_en_g_de_aliment2*prix_aliment2/1000))}~\\text{\\euro}$`+'\\\\'
				texte_corr += `Prix total à payer : $${tex_nombre(Algebrite.eval(masse_en_kg_de_aliment1*prix_aliment1))}~\\text{\\euro} + ${tex_nombre(Algebrite.eval(masse_en_g_de_aliment2*prix_aliment2/1000))}~\\text{\\euro} \\approx ${arrondi_virgule(Algebrite.eval(masse_en_kg_de_aliment1*prix_aliment1+masse_en_g_de_aliment2*prix_aliment2/1000))}~\\text{\\euro}$`
			
			}

			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			
			liste_de_question_to_contenu_sans_numero(this);
	}	
}

function Aire_de_triangles(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.pas_de_version_LaTeX = true ;
	this.titre = "Aires de triangles"
	this.consigne = "Calculer l'aire des 3 triangles suivants (vous pouvez déplacer certains points)."
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 1;
	this.nb_questions_modifiable = false ;
	this.type_exercice = 'MG32';
	this.taille_div_MG32 = [500,450];


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_corrections = []; // Liste de questions corrigées
		let tableau_des_cotes = shuffle ([3,4,5,6,7]); //pour s'assurer que les 3 côtés sont différents
		let c1 = tableau_des_cotes[0];
		let c2 = tableau_des_cotes[1];
		let c3 = tableau_des_cotes[2];
		let tableau_des_hauteurs = shuffle ([3,4,5,6]); //pour s'assurer que les 3 hauteurs sont différents
		let h1 = tableau_des_hauteurs[0];
		let h2 = tableau_des_hauteurs[1];
		let h3 = tableau_des_hauteurs[2];
		
		let codeBase64 =""
		if (randint(1,2)==1) {
			codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAL2AAACOAAAAQEAAAABAAAABgAQTG9uZ3VldXJPcmllbnRlZQArIzE6IExlIHByZW1pZXIgcG9pbnQKIzI6IExlIGRldXhpw6htZSBwb2ludAAAAAIAAAADAAAAAAn#####AAAAAQARQ0VsZW1lbnRHZW5lcmlxdWUAAUEAAAAA#####wAAAAAAAUIAAAAA##########8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####AAAAAAEQAAABAAEAAAAAAT#wAAAAAAAA#####wAAAAEAD0NQb2ludExpZURyb2l0ZQD#####AAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAAAC#####wAAAAEACENTZWdtZW50Af####8AAAAAABAAAAEAAQAAAAAAAAAB#####wAAAAIAE0NNZXN1cmVBbmdsZU9yaWVudGUA#####wAEYW5nJwAAAAMAAAAAAAAAAf####8AAAABAAlDTG9uZ3VldXIB#####wAAAAAAAAAB#####wAAAAEAB0NNaWxpZXUA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAAAAAAB#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQH#####AAAAAABAAAAAAAAAAMAAAAAAAAAAAAAABxAAAAAAAAEAAAAC#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAUAAAAAAgAAAAYAAAABAAAAuP####8AAAABAApDQ2FsY0NvbnN0AP####8AAnBpABYzLjE0MTU5MjY1MzU4OTc5MzIzODQ2#####wAAAAEACkNDb25zdGFudGVACSH7VEQtGP####8AAAABAApDUG9pbnRCYXNlAP####8BAAAAAA4AAVUAwCQAAAAAAABAEAAAAAAAAAUAAEAsZmZmZmZmQCxmZmZmZmYAAAABAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAAAAAACAP####8BAAAAAA4AAVYAwAAAAAAAAABAEAAAAAAAAAUAAUA8ZmZmZmZmAAAAAgAAAAMA#####wEAAAAAEAAAAQABAAAAAQAAAAMAAAAGAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAA#####8AAAACAAxDQ29tbWVudGFpcmUA#####wEAAAAAAAAAAAAAAABAGAAAAAAAAAAAAAUMAAAAAAABAAAAAAAAAAoAAAAAAAAAAAABMQAAAAUA#####wAAAAEAAAAD#####wAAAAEAB0NDYWxjdWwA#####wACYzEAATQAAAAKQBAAAAAAAAAAAAANAP####8AAmgxAAE0AAAACkAQAAAAAAAAAAAADQD#####AAJjMgABNQAAAApAFAAAAAAAAAAAAA0A#####wACaDIAATQAAAAKQBAAAAAAAAAAAAANAP####8AAmMzAAE1AAAACkAUAAAAAAAAAAAADQD#####AAJoMwABNAAAAApAEAAAAAAAAAAAAAsA#####wAAAAAAEAABQQDAKgAAAAAAAD#wAAAAAAAAAwABQDwAAAAAAABAYSAAAAAAAP####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAIAAAADv####8AAAACAAlDQ2VyY2xlT1IAAAAADwEAAAAAAQAAAA4AAAAIAAAACAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAQAAAA8AAAAAABAAAUIAwBgAAAAAAABAFAAAAAAAAAMAAUAXmRub7wU+AAAAEAAAAAMBAAAADwAAAAAAEAAAAQABAAAADgAAABEAAAACAP####8AAAAAABAAAUgAwCYAAAAAAABAFAAAAAAAAAMAAT#nUJEwLKgdAAAAEv####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAABMAAAASAAAADwD#####AQAAAAABAAAAEwAAAAgAAAAJAP####8AAAABABBDSW50RHJvaXRlQ2VyY2xlAP####8AAAAUAAAAFf####8AAAABABBDUG9pbnRMaWVCaXBvaW50AP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABAAAAFgAAABMA#####wAAAAAAEAABQwC#8AAAAAAAAMA7AAAAAAAAAwACAAAAFgAAAAMA#####wAAAAAAEAAAAQABAAAADgAAABgAAAADAP####8AAAAAABAAAAEAAQAAABgAAAARAAAAAwD#####AAAAAAAQAAABAQEAAAATAAAAGAAAAAsA#####wAAAAAAEAABRADAJgAAAAAAAMA7AAAAAAAAAwABQHpQAAAAAABATYAAAAAAAAAAAA4A#####wAbU2VnbWVudCBkZSBsb25ndWV1ciBkb25uw6llAAAAAQAAAAIAAAACAAAACgAAABwAAAAPAAAAAB0BAAAAAAEAAAAcAAAACAAAAAoAAAAAEAEAAAAdAAAAAAAQAAFFAMAyAAAAAAAAwDAAAAAAAAADAAFADDWm90SREAAAAB4AAAADAQAAAB0AAAAAABAAAAEAAQAAABwAAAAfAAAAAgD#####AAAAAAAQAAFHAMAkAAAAAAAAQBAAAAAAAAADAAE#5pq7A1eUfwAAACAAAAARAP####8BAAAAABAAAAEAAQAAACEAAAAgAAAADwD#####AQAAAAABAAAAIQAAAAgAAAALAAAAABIA#####wAAACIAAAAjAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAACQAAAATAP####8AAAAAABAAAUYAwBAAAAAAAABAIAAAAAAAAAMAAgAAACQAAAADAP####8AAAAAABAAAAEAAQAAABwAAAAmAAAAAwD#####AAAAAAAQAAABAAEAAAAmAAAAHwAAAAMA#####wAAAAAAEAAAAQEBAAAAIQAAACYAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAABMAAAAY#####wAAAAEAC0NNZWRpYXRyaWNlAAAAACoBAAAAAA0AAAEAAQAAABMAAAAYAAAABgAAAAAqAQAAAAANAAABBQAAAAATAAAAGAAAAA8AAAAAKgEAAAAAAQAAACwAAAAKQDAAAAAAAAABAAAAEgAAAAAqAAAAKwAAAC0AAAATAAAAACoBAAAAAA0AAAEFAAEAAAAuAAAABQEAAAAqAAAAEwAAABgAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAACEAAAAmAAAAFAAAAAAxAQAAAAANAAABAAEAAAAhAAAAJgAAAAYAAAAAMQEAAAAADQAAAQUAAAAAIQAAACYAAAAPAAAAADEBAAAAAAEAAAAzAAAACkAwAAAAAAAAAQAAABIAAAAAMQAAADIAAAA0AAAAEwAAAAAxAQAAAAANAAABBQABAAAANQAAAAUBAAAAMQAAACEAAAAmAAAACwD#####AAAAAAAQAAFNAMAoAAAAAAAAQBAAAAAAAAADAAFAS4AAAAAAAEBywAAAAAAAAAAADgD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAMAAAAOAAAAA8AAAAAOQEAAAAAAQAAADgAAAAIAAAADAAAAAAQAQAAADkAAAAAABAAAU4AwCIAAAAAAABACAAAAAAAAAMAAUAXx81SzkwjAAAAOgAAAAMBAAAAOQAAAAAAEAAAAQABAAAAOAAAADv#####AAAAAQAJQ0Ryb2l0ZUFCAP####8BAAAAABAAAAEAAQAAADgAAAA7AAAAAgD#####AAAAAAAQAAFJAAAAAAAAAAAAQAgAAAAAAAADAAE#99qox0vglgAAAD0AAAARAP####8BAAAAABAAAAEAAQAAAD4AAAA9AAAADwD#####AQAAAAABAAAAPgAAAAgAAAANAAAAABIA#####wAAAD8AAABAAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAAEEAAAATAP####8AAAAAABAAAU8AwAgAAAAAAADAPAAAAAAAAAMAAgAAAEEAAAADAP####8AAAAAABAAAAEAAQAAADsAAABDAAAAAwD#####AAAAAAAQAAABAAEAAABDAAAAOAAAAAMA#####wAAAAAAEAAAAQEBAAAAOwAAAD4AAAADAP####8AAAAAABAAAAEBAQAAAD4AAABD#####wAAAAIAF0NNYXJxdWVBbmdsZUdlb21ldHJpcXVlAP####8AAAAAAAEAAAABQDAAAAAAAAAAAABDAAAAPgAAADsAAAAWAP####8AAAAAAAEAAAABQDAAAAAAAAAAAAAYAAAAEwAAAA4AAAAWAP####8AAAAAAAEAAAABQDAAAAAAAAAAAAAmAAAAIQAAABwAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAAD4AAABDAAAAFAAAAABLAQAAAAANAAABAAEAAAA+AAAAQwAAAAYAAAAASwEAAAAADQAAAQUAAAAAPgAAAEMAAAAPAAAAAEsBAAAAAAEAAABNAAAACkAwAAAAAAAAAQAAABIAAAAASwAAAEwAAABOAAAAEwAAAABLAQAAAAANAAABBQABAAAATwAAAAUBAAAASwAAAD4AAABDAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAEwAAABgAAAABAAAAAFIAAAAAARAAAAEAAQAAABMBP#AAAAAAAAAAAAACAAAAAFIAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAFMAAAADAQAAAFIAAAAAABAAAAEBAQAAABMAAAAYAAAABAAAAABSAARhbmcnAAAAVAAAABMAAAAYAAAABQEAAABSAAAAEwAAABgAAAAGAAAAAFIAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAATAAAAGAAAAAcBAAAAUgAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAFgQAAAAAAABAAAAAgAAAAgAAABWAAAAAyBjbQIAAABXAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAIQAAACYAAAABAAAAAFoAAAAAARAAAAEAAQAAACEBP#AAAAAAAAAAAAACAAAAAFoAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAFsAAAADAQAAAFoAAAAAABAAAAEBAQAAACEAAAAmAAAABAAAAABaAARhbmcnAAAAXAAAACEAAAAmAAAABQEAAABaAAAAIQAAACYAAAAGAAAAAFoAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAhAAAAJgAAAAcBAAAAWgAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAGAQAAAAAAABAAAAAgAAAAgAAABeAAAAAyBjbQIAAABfAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAAAwAAAAIAAAACAAAAOwAAAEMAAAABAAAAAGIAAAAAARAAAAEAAQAAADsBP#AAAAAAAAAAAAACAAAAAGIAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAGMAAAADAQAAAGIAAAAAABAAAAEAAQAAADsAAABDAAAABAAAAABiAARhbmcnAAAAZAAAADsAAABDAAAABQEAAABiAAAAOwAAAEMAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAA+AAAAQwAAAAEAAAAAaAAAAAABEAAAAQABAAAAPgE#8AAAAAAAAAAAAAIAAAAAaAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAaQAAAAMBAAAAaAAAAAAAEAAAAQEBAAAAPgAAAEMAAAAEAAAAAGgABGFuZycAAABqAAAAPgAAAEMAAAAFAQAAAGgAAAA+AAAAQwAAAAYAAAAAaAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAD4AAABDAAAABwEAAABoAAAAAABAMAAAAAAAAEAQAAAAAAAAAAAAbhAAAAAAAAEAAAACAAAACAAAAGwAAAADIGNtAgAAAG0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAOAAAAEQAAAAEAAAAAcAAAAAABEAAAAQABAAAADgE#8AAAAAAAAAAAAAIAAAAAcAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAcQAAAAMBAAAAcAAAAAAAEAAAAQABAAAADgAAABEAAAAEAAAAAHAABGFuZycAAAByAAAADgAAABEAAAAFAQAAAHAAAAAOAAAAEQAAAAYAAAAAcAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA4AAAARAAAABwEAAABwAAAAAADAJAAAAAAAAEAyAAAAAAAAAAAAdhAAAAAAAAEAAAACAAAACAAAAHQAAAADIGNtAgAAAHUAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAfAAAAHAAAAAEAAAAAeAAAAAABEAAAAQABAAAAHwE#8AAAAAAAAAAAAAIAAAAAeAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAeQAAAAMBAAAAeAAAAAAAEAAAAQABAAAAHwAAABwAAAAEAAAAAHgABGFuZycAAAB6AAAAHwAAABwAAAAFAQAAAHgAAAAfAAAAHAAAAAYAAAAAeAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB8AAAAcAAAABwEAAAB4AAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAfhAAAAAAAAEAAAACAAAACAAAAHwAAAADIGNtAgAAAH0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAA4AAAAOwAAAAEAAAAAgAAAAAABEAAAAQABAAAAOAE#8AAAAAAAAAAAAAIAAAAAgAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAgQAAAAMBAAAAgAAAAAAAEAAAAQABAAAAOAAAADsAAAAEAAAAAIAABGFuZycAAACCAAAAOAAAADsAAAAFAQAAAIAAAAA4AAAAOwAAAAYAAAAAgAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADgAAAA7AAAABwEAAACAAAAAAADAJAAAAAAAAEAyAAAAAAAAAAAAhhAAAAAAAAEAAAACAAAACAAAAIQAAAADIGNtAgAAAIUAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAOAAAAGAAAAAEAAAAAiAAAAAABEAAAAQABAAAADgE#8AAAAAAAAAAAAAIAAAAAiAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAiQAAAAMBAAAAiAAAAAAAEAAAAQABAAAADgAAABgAAAAEAAAAAIgABGFuZycAAACKAAAADgAAABgAAAAFAQAAAIgAAAAOAAAAGAAAAAYAAAAAiAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA4AAAAYAAAABwEAAACIAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAjhAAAAAAAAEAAAACAAAACAAAAIwAAAADIGNtAQAAAI0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAARAAAAGAAAAAEAAAAAkAAAAAABEAAAAQABAAAAEQE#8AAAAAAAAAAAAAIAAAAAkAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAkQAAAAMBAAAAkAAAAAAAEAAAAQABAAAAEQAAABgAAAAEAAAAAJAABGFuZycAAACSAAAAEQAAABgAAAAFAQAAAJAAAAARAAAAGAAAAAYAAAAAkAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAABEAAAAYAAAABwEAAACQAAAAAABAMQAAAAAAAD#wAAAAAAAAAAAAlhAAAAAAAAEAAAACAAAACAAAAJQAAAADIGNtAQAAAJUAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAfAAAAJgAAAAEAAAAAmAAAAAABEAAAAQABAAAAHwE#8AAAAAAAAAAAAAIAAAAAmAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAmQAAAAMBAAAAmAAAAAAAEAAAAQABAAAAHwAAACYAAAAEAAAAAJgABGFuZycAAACaAAAAHwAAACYAAAAFAQAAAJgAAAAfAAAAJgAAAAYAAAAAmAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB8AAAAmAAAABwEAAACYAAAAAADAMAAAAAAAAEAqAAAAAAAAAAAAnhAAAAAAAAEAAAACAAAACAAAAJwAAAADIGNtAQAAAJ0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAmAAAAHAAAAAEAAAAAoAAAAAABEAAAAQABAAAAJgE#8AAAAAAAAAAAAAIAAAAAoAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAoQAAAAMBAAAAoAAAAAAAEAAAAQABAAAAJgAAABwAAAAEAAAAAKAABGFuZycAAACiAAAAJgAAABwAAAAFAQAAAKAAAAAmAAAAHAAAAAYAAAAAoAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACYAAAAcAAAABwEAAACgAAAAAABAMQAAAAAAAEAUAAAAAAAAAAAAphAAAAAAAAEAAAACAAAACAAAAKQAAAADIGNtAQAAAKUAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAA4AAAAQwAAAAEAAAAAqAAAAAABEAAAAQABAAAAOAE#8AAAAAAAAAAAAAIAAAAAqAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAqQAAAAMBAAAAqAAAAAAAEAAAAQABAAAAOAAAAEMAAAAEAAAAAKgABGFuZycAAACqAAAAOAAAAEMAAAAFAQAAAKgAAAA4AAAAQwAAAAYAAAAAqAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADgAAABDAAAABwEAAACoAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAArhAAAAAAAAEAAAACAAAACAAAAKwAAAADIGNtAQAAAK0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAA7AAAAQwAAAAEAAAAAsAAAAAABEAAAAQABAAAAOwE#8AAAAAAAAAAAAAIAAAAAsAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAsQAAAAMBAAAAsAAAAAAAEAAAAQABAAAAOwAAAEMAAAAEAAAAALAABGFuZycAAACyAAAAOwAAAEMAAAAFAQAAALAAAAA7AAAAQwAAAAYAAAAAsAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADsAAABDAAAABwEAAACwAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAthAAAAAAAAEAAAACAAAACAAAALQAAAADIGNtAQAAALUAAAAH##########8=";
		} else {
			codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAL2AAACOAAAAQEAAAABAAAABgAQTG9uZ3VldXJPcmllbnRlZQArIzE6IExlIHByZW1pZXIgcG9pbnQKIzI6IExlIGRldXhpw6htZSBwb2ludAAAAAIAAAADAAAAAAn#####AAAAAQARQ0VsZW1lbnRHZW5lcmlxdWUAAUEAAAAA#####wAAAAAAAUIAAAAA##########8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####AAAAAAEQAAABAAEAAAAAAT#wAAAAAAAA#####wAAAAEAD0NQb2ludExpZURyb2l0ZQD#####AAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAAAC#####wAAAAEACENTZWdtZW50Af####8AAAAAABAAAAEAAQAAAAAAAAAB#####wAAAAIAE0NNZXN1cmVBbmdsZU9yaWVudGUA#####wAEYW5nJwAAAAMAAAAAAAAAAf####8AAAABAAlDTG9uZ3VldXIB#####wAAAAAAAAAB#####wAAAAEAB0NNaWxpZXUA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAAAAAAB#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQH#####AAAAAABAAAAAAAAAAMAAAAAAAAAAAAAABxAAAAAAAAEAAAAC#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAUAAAAAAgAAAAYAAAABAAAAw#####8AAAABAApDQ2FsY0NvbnN0AP####8AAnBpABYzLjE0MTU5MjY1MzU4OTc5MzIzODQ2#####wAAAAEACkNDb25zdGFudGVACSH7VEQtGP####8AAAABAApDUG9pbnRCYXNlAP####8BAAAAAA4AAVUAwCQAAAAAAABAEAAAAAAAAAUAAEAsZmZmZmZmQCxmZmZmZmYAAAABAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAAAAAACAP####8BAAAAAA4AAVYAwAAAAAAAAABAEAAAAAAAAAUAAUA8ZmZmZmZmAAAAAgAAAAMA#####wEAAAAAEAAAAQABAAAAAQAAAAMAAAAGAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAA#####8AAAACAAxDQ29tbWVudGFpcmUA#####wEAAAAAAAAAAAAAAABAGAAAAAAAAAAAAAUMAAAAAAABAAAAAAAAAAoAAAAAAAAAAAABMQAAAAUA#####wAAAAEAAAAD#####wAAAAEAB0NDYWxjdWwA#####wACYzEAATQAAAAKQBAAAAAAAAAAAAANAP####8AAmgxAAE0AAAACkAQAAAAAAAAAAAADQD#####AAJjMgABNQAAAApAFAAAAAAAAAAAAA0A#####wACaDIAATQAAAAKQBAAAAAAAAAAAAANAP####8AAmMzAAE1AAAACkAUAAAAAAAAAAAADQD#####AAJoMwABNAAAAApAEAAAAAAAAAAAAAsA#####wAAAAAAEAABQQDAMgAAAAAAAMAwAAAAAAAAAwABQFDAAAAAAABAQoAAAAAAAP####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAIAAAADv####8AAAACAAlDQ2VyY2xlT1IAAAAADwEAAAAAAQAAAA4AAAAIAAAACAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAQAAAA8AAAAAABAAAUIAwDMAAAAAAADACAAAAAAAAAMAAUAS60sQO3OGAAAAEAAAAAMBAAAADwAAAAAAEAAAAQABAAAADgAAABEAAAACAP####8AAAAAABAAAUgAP#AAAAAAAAA#8AAAAAAAAAMAAT#ouymi+6YKAAAAEv####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAABMAAAASAAAADwD#####AQAAAAABAAAAEwAAAAgAAAAJAP####8AAAABABBDSW50RHJvaXRlQ2VyY2xlAP####8AAAAUAAAAFf####8AAAABABBDUG9pbnRMaWVCaXBvaW50AP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABAAAAFgAAABMA#####wAAAAAAEAABQwBAIAAAAAAAAMAoAAAAAAAAAwACAAAAFgAAAAMA#####wAAAAAAEAAAAQABAAAADgAAABgAAAADAP####8AAAAAABAAAAEAAQAAABgAAAARAAAAAwD#####AAAAAAAQAAABAQEAAAATAAAAGAAAAAsA#####wAAAAAAEAABRABAEAAAAAAAAAAAAAAAAAAAAwABQH0QAAAAAABAZGAAAAAAAAAAAA4A#####wAbU2VnbWVudCBkZSBsb25ndWV1ciBkb25uw6llAAAAAQAAAAIAAAACAAAACgAAABwAAAAPAAAAAB0BAAAAAAEAAAAcAAAACAAAAAoAAAAAEAEAAAAdAAAAAAAQAAFFAMAyAAAAAAAAwDAAAAAAAAADAAFAA5gUsW2nVQAAAB4AAAADAQAAAB0AAAAAABAAAAEAAQAAABwAAAAfAAAAAgD#####AAAAAAAQAAFHAMA3AAAAAAAAwCIAAAAAAAADAAE#5pq7A1eUfwAAACAAAAARAP####8BAAAAABAAAAEAAQAAACEAAAAgAAAADwD#####AQAAAAABAAAAIQAAAAgAAAALAAAAABIA#####wAAACIAAAAjAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAACQAAAATAP####8AAAAAABAAAUYAwDIAAAAAAAC#8AAAAAAAAAMAAgAAACQAAAADAP####8AAAAAABAAAAEAAQAAABwAAAAmAAAAAwD#####AAAAAAAQAAABAAEAAAAmAAAAHwAAAAMA#####wAAAAAAEAAAAQEBAAAAIQAAACYAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAABMAAAAY#####wAAAAEAC0NNZWRpYXRyaWNlAAAAACoBAAAAAA0AAAEAAQAAABMAAAAYAAAABgAAAAAqAQAAAAANAAABBQAAAAATAAAAGAAAAA8AAAAAKgEAAAAAAQAAACwAAAAKQDAAAAAAAAABAAAAEgAAAAAqAAAAKwAAAC0AAAATAAAAACoBAAAAAA0AAAEFAAEAAAAuAAAABQEAAAAqAAAAEwAAABgAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAACEAAAAmAAAAFAAAAAAxAQAAAAANAAABAAEAAAAhAAAAJgAAAAYAAAAAMQEAAAAADQAAAQUAAAAAIQAAACYAAAAPAAAAADEBAAAAAAEAAAAzAAAACkAwAAAAAAAAAQAAABIAAAAAMQAAADIAAAA0AAAAEwAAAAAxAQAAAAANAAABBQABAAAANQAAAAUBAAAAMQAAACEAAAAmAAAACwD#####AAAAAAAQAAFNAMAgAAAAAAAAwD0AAAAAAAADAAFAdBAAAAAAAEBwcAAAAAAAAAAADgD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAMAAAAOAAAAA8AAAAAOQEAAAAAAQAAADgAAAAIAAAADAAAAAAQAQAAADkAAAAAABAAAU4AwBwAAAAAAADAOgAAAAAAAAMAAUAJOHyA#SdXAAAAOgAAAAMBAAAAOQAAAAAAEAAAAQABAAAAOAAAADv#####AAAAAQAJQ0Ryb2l0ZUFCAP####8BAAAAABAAAAEAAQAAADgAAAA7AAAAAgD#####AAAAAAAQAAFJAMAIAAAAAAAAwDwAAAAAAAADAAE#99qox0vglgAAAD0AAAARAP####8BAAAAABAAAAEAAQAAAD4AAAA9AAAADwD#####AQAAAAABAAAAPgAAAAgAAAANAAAAABIA#####wAAAD8AAABAAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAAEEAAAATAP####8AAAAAABAAAU8AwBwAAAAAAABAHAAAAAAAAAMAAgAAAEEAAAADAP####8AAAAAABAAAAEAAQAAADsAAABDAAAAAwD#####AAAAAAAQAAABAAEAAABDAAAAOAAAAAMA#####wAAAAAAEAAAAQEBAAAAOwAAAD4AAAADAP####8AAAAAABAAAAEBAQAAAD4AAABD#####wAAAAIAF0NNYXJxdWVBbmdsZUdlb21ldHJpcXVlAP####8AAAAAAAEAAAABQDAAAAAAAAAAAABDAAAAPgAAADsAAAAWAP####8AAAAAAAEAAAABQDAAAAAAAAAAAAAYAAAAEwAAAA4AAAAWAP####8AAAAAAAEAAAABQDAAAAAAAAAAAAAmAAAAIQAAABwAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAAD4AAABDAAAAFAAAAABLAQAAAAANAAABAAEAAAA+AAAAQwAAAAYAAAAASwEAAAAADQAAAQUAAAAAPgAAAEMAAAAPAAAAAEsBAAAAAAEAAABNAAAACkAwAAAAAAAAAQAAABIAAAAASwAAAEwAAABOAAAAEwAAAABLAQAAAAANAAABBQABAAAATwAAAAUBAAAASwAAAD4AAABDAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAEwAAABgAAAABAAAAAFIAAAAAARAAAAEAAQAAABMBP#AAAAAAAAAAAAACAAAAAFIAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAFMAAAADAQAAAFIAAAAAABAAAAEBAQAAABMAAAAYAAAABAAAAABSAARhbmcnAAAAVAAAABMAAAAYAAAABQEAAABSAAAAEwAAABgAAAAGAAAAAFIAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAATAAAAGAAAAAcBAAAAUgAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAFgQAAAAAAABAAAAAgAAAAgAAABWAAAAAyBjbQIAAABXAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAAAwAAAAIAAAACAAAAIQAAACYAAAABAAAAAFoAAAAAARAAAAEAAQAAACEBP#AAAAAAAAAAAAACAAAAAFoAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAFsAAAADAQAAAFoAAAAAABAAAAEBAQAAACEAAAAmAAAABAAAAABaAARhbmcnAAAAXAAAACEAAAAmAAAABQEAAABaAAAAIQAAACYAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAADAAAAAgAAAAIAAAA7AAAAQwAAAAEAAAAAYAAAAAABEAAAAQABAAAAOwE#8AAAAAAAAAAAAAIAAAAAYAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAYQAAAAMBAAAAYAAAAAAAEAAAAQABAAAAOwAAAEMAAAAEAAAAAGAABGFuZycAAABiAAAAOwAAAEMAAAAFAQAAAGAAAAA7AAAAQwAAAA4A#####wAQTG9uZ3VldXJPcmllbnRlZQAAAAQAAAADAAAAAgAAAD4AAABDAAAAAQAAAABmAAAAAAEQAAABAAEAAAA+AT#wAAAAAAAAAAAAAgAAAABmAAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAABnAAAAAwEAAABmAAAAAAAQAAABAQEAAAA+AAAAQwAAAAQAAAAAZgAEYW5nJwAAAGgAAAA+AAAAQwAAAAUBAAAAZgAAAD4AAABDAAAABgAAAABmAAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAPgAAAEMAAAAHAQAAAGYAAAAAAMAyAAAAAAAAwAgAAAAAAAAAAABsEAAAAAAAAQAAAAIAAAAIAAAAagAAAAMgY20CAAAAawAAAA4A#####wAQTG9uZ3VldXJPcmllbnRlZQAAAAQAAAADAAAAAgAAAA4AAAARAAAAAQAAAABuAAAAAAEQAAABAAEAAAAOAT#wAAAAAAAAAAAAAgAAAABuAAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAABvAAAAAwEAAABuAAAAAAAQAAABAAEAAAAOAAAAEQAAAAQAAAAAbgAEYW5nJwAAAHAAAAAOAAAAEQAAAAUBAAAAbgAAAA4AAAARAAAABgAAAABuAAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADgAAABEAAAAHAQAAAG4AAAAAAMA2AAAAAAAAQDQAAAAAAAAAAAB0EAAAAAAAAQAAAAIAAAAIAAAAcgAAAAMgY20CAAAAcwAAAA4A#####wAQTG9uZ3VldXJPcmllbnRlZQAAAAQAAAADAAAAAgAAAB8AAAAcAAAAAQAAAAB2AAAAAAEQAAABAAEAAAAfAT#wAAAAAAAAAAAAAgAAAAB2AAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAAB3AAAAAwEAAAB2AAAAAAAQAAABAAEAAAAfAAAAHAAAAAQAAAAAdgAEYW5nJwAAAHgAAAAfAAAAHAAAAAUBAAAAdgAAAB8AAAAcAAAABgAAAAB2AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAHwAAABwAAAAHAQAAAHYAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAAB8EAAAAAAAAQAAAAIAAAAIAAAAegAAAAMgY20CAAAAewAAAA4A#####wAQTG9uZ3VldXJPcmllbnRlZQAAAAMAAAACAAAAAgAAADgAAAA7AAAAAQAAAAB+AAAAAAEQAAABAAEAAAA4AT#wAAAAAAAAAAAAAgAAAAB+AAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAAB#AAAAAwEAAAB+AAAAAAAQAAABAAEAAAA4AAAAOwAAAAQAAAAAfgAEYW5nJwAAAIAAAAA4AAAAOwAAAAUBAAAAfgAAADgAAAA7AAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAOwAAADgAAAABAAAAAIQAAAAAARAAAAEAAQAAADsBP#AAAAAAAAAAAAACAAAAAIQAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAIUAAAADAQAAAIQAAAAAABAAAAEAAQAAADsAAAA4AAAABAAAAACEAARhbmcnAAAAhgAAADsAAAA4AAAABQEAAACEAAAAOwAAADgAAAAGAAAAAIQAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA7AAAAOAAAAAcBAAAAhAAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAIoQAAAAAAABAAAAAgAAAAgAAACIAAAAAyBjbQIAAACJAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAEQAAABgAAAABAAAAAIwAAAAAARAAAAEAAQAAABEBP#AAAAAAAAAAAAACAAAAAIwAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAI0AAAADAQAAAIwAAAAAABAAAAEAAQAAABEAAAAYAAAABAAAAACMAARhbmcnAAAAjgAAABEAAAAYAAAABQEAAACMAAAAEQAAABgAAAAGAAAAAIwAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAARAAAAGAAAAAcBAAAAjAAAAAAAQBQAAAAAAABAMwAAAAAAAAAAAJIQAAAAAAABAAAAAgAAAAgAAACQAAAAAyBjbQEAAACRAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAADgAAABgAAAABAAAAAJQAAAAAARAAAAEAAQAAAA4BP#AAAAAAAAAAAAACAAAAAJQAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAJUAAAADAQAAAJQAAAAAABAAAAEAAQAAAA4AAAAYAAAABAAAAACUAARhbmcnAAAAlgAAAA4AAAAYAAAABQEAAACUAAAADgAAABgAAAAGAAAAAJQAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAOAAAAGAAAAAcBAAAAlAAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAJoQAAAAAAABAAAAAgAAAAgAAACYAAAAAyBjbQEAAACZAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAJgAAAB8AAAABAAAAAJwAAAAAARAAAAEAAQAAACYBP#AAAAAAAAAAAAACAAAAAJwAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAJ0AAAADAQAAAJwAAAAAABAAAAEAAQAAACYAAAAfAAAABAAAAACcAARhbmcnAAAAngAAACYAAAAfAAAABQEAAACcAAAAJgAAAB8AAAAGAAAAAJwAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAmAAAAHwAAAAcBAAAAnAAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAKIQAAAAAAABAAAAAgAAAAgAAACgAAAAAyBjbQEAAAChAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAJgAAABwAAAABAAAAAKQAAAAAARAAAAEAAQAAACYBP#AAAAAAAAAAAAACAAAAAKQAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAKUAAAADAQAAAKQAAAAAABAAAAEAAQAAACYAAAAcAAAABAAAAACkAARhbmcnAAAApgAAACYAAAAcAAAABQEAAACkAAAAJgAAABwAAAAGAAAAAKQAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAmAAAAHAAAAAcBAAAApAAAAAAAQAgAAAAAAABAMwAAAAAAAAAAAKoQAAAAAAABAAAAAgAAAAgAAACoAAAAAyBjbQEAAACpAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAIAAAACAAAAJgAAACEAAAABAAAAAKwAAAAAARAAAAEAAQAAACYBP#AAAAAAAAAAAAACAAAAAKwAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAK0AAAAEAAAAAKwABGFuZycAAACuAAAAJgAAACEAAAAFAQAAAKwAAAAmAAAAIQAAAAYAAAAArAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACYAAAAhAAAABwEAAACsAAAAAABALgAAAAAAAEAmAAAAAAAAAAAAsRAAAAAAAAEAAAACAAAACAAAAK8AAAADIGNtAQAAALAAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAABDAAAAOwAAAAEAAAAAswAAAAABEAAAAQABAAAAQwE#8AAAAAAAAAAAAAIAAAAAswAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAtAAAAAMBAAAAswAAAAAAEAAAAQABAAAAQwAAADsAAAAEAAAAALMABGFuZycAAAC1AAAAQwAAADsAAAAFAQAAALMAAABDAAAAOwAAAAYAAAAAswAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEMAAAA7AAAABwEAAACzAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAuRAAAAAAAAEAAAACAAAACAAAALcAAAADIGNtAQAAALgAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAABDAAAAOAAAAAEAAAAAuwAAAAABEAAAAQABAAAAQwE#8AAAAAAAAAAAAAIAAAAAuwAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAvAAAAAMBAAAAuwAAAAAAEAAAAQABAAAAQwAAADgAAAAEAAAAALsABGFuZycAAAC9AAAAQwAAADgAAAAFAQAAALsAAABDAAAAOAAAAAYAAAAAuwAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEMAAAA4AAAABwEAAAC7AAAAAABAKAAAAAAAAEAsAAAAAAAAAAAAwRAAAAAAAAEAAAACAAAACAAAAL8AAAADIGNtAQAAAMAAAAAH##########8="
		}
		texte_corr=`$\\mathcal{A}_{ABC}=\\dfrac{1}{2}\\times AB\\times HC=\\dfrac{1}{2}\\times${c1}~\\text{cm}\\times ${h1}~\\text{cm}=${tex_nombre(Algebrite.eval(c1*h1/2))}~\\text{cm}^2$`	
		texte_corr+="\\\\\\\\"
		texte_corr+=`$\\mathcal{A}_{DEF}=\\dfrac{1}{2}\\times DE\\times GF=\\dfrac{1}{2}\\times${c2}~\\text{cm}\\times ${h2}~\\text{cm}=${tex_nombre(Algebrite.eval(c2*h2/2))}~\\text{cm}^2$`	
		texte_corr+="\\\\\\\\"
		texte_corr+=`$\\mathcal{A}_{ABC}=\\dfrac{1}{2}\\times MN\\times IO=\\dfrac{1}{2}\\times${c3}~\\text{cm}\\times ${h3}~\\text{cm}=${tex_nombre(Algebrite.eval(c3*h3/2))}~\\text{cm}^2$`	
		
		codeMG32 += `
	        var st${numero_de_l_exercice} = "${codeBase64}" ;
	        mtg32App.addDoc("mtg32svg${numero_de_l_exercice}", st${numero_de_l_exercice}, false);
	        mtg32App.giveFormula2("mtg32svg${numero_de_l_exercice}", "c1", "${c1}");
	        mtg32App.giveFormula2("mtg32svg${numero_de_l_exercice}", "c2", "${c2}");
	        mtg32App.giveFormula2("mtg32svg${numero_de_l_exercice}", "c3", "${c3}");
	        mtg32App.giveFormula2("mtg32svg${numero_de_l_exercice}", "h1", "${h1}");
	        mtg32App.giveFormula2("mtg32svg${numero_de_l_exercice}", "h2", "${h2}");
	        mtg32App.giveFormula2("mtg32svg${numero_de_l_exercice}", "h3", "${h3}");
	        
	      ` 	
		
			
		this.liste_corrections.push(texte_corr);
		mg32_to_contenu(this);		
	}

	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,"1 : Périmètres\n\
2 : Aires\n3 : Périmètres et aires"];			
}


function Perimetre_aire_disques(pa=3){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.pas_de_version_LaTeX = true ;
	this.titre = "Périmètres et aires de disques"
	this.consigne = "Calculer le périmètre et l'aire des 4 disques suivants"
	this.sup = pa ; // 1 : périmètre, 2 : aire, 3 : périmètres et aires
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 1;
	this.nb_questions_modifiable = false ;
	this.type_exercice = 'MG32';
	this.taille_div_MG32 = [500,500];


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_corrections = []; // Liste de questions corrigées
		let tableau_des_rayons = shuffle ([2,3,4,5,6,7,8]); //pour s'assurer que les 4 rayons sont différents
		let r1 = tableau_des_rayons[0];
		let r2 = tableau_des_rayons[1];
		let r3 = tableau_des_rayons[2];
		let r4 = tableau_des_rayons[3];
		if (this.sup==1){
			this.consigne = "Calculer le périmètre des 4 cercles suivants.";
		}
		if (this.sup==2) {
			this.consigne = "Calculer l'aire des 4 disques suivants";
		}

		let codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAL2AAACOAAAAQEAAAAAAAAAAQAAAEv#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AQAAAAAOAAFPAMAoAAAAAAAAAAAAAAAAAAAFAAFACAAAAAAAAEB#UAAAAAAA#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUA8ZmZmZmZmAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAQAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAEAAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQANQ1BvaW50QmFzZUVudAD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAAAoAAAAAAAAAAEAyAAAAAAAAAQEAAAARAP####8BAAAAABAAAUEAAAAAAAAAAABACAAAAAAAAAUAAQAAAAoAAAAAAAAAAEAwAAAAAAAAAQEAAAARAP####8BAAAAABAAAUIAAAAAAAAAAABACAAAAAAAAAUAAQAAAApAMQAAAAAAAEAwAAAAAAAAAQEAAAARAP####8BAAAAABAAAUMAAAAAAAAAAABACAAAAAAAAAUAAQAAAApAMQAAAAAAAAAAAAAAAAAAAQH#####AAAAAQAUQ0ltcGxlbWVudGF0aW9uUHJvdG8A#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAEAAAABH#####AAAAAQALQ01lZGlhdHJpY2UAAAAAEwEAAAAAEAAAAQABAAAAEAAAABH#####AAAAAQAHQ01pbGlldQAAAAATAQAAAAAQAAABBQAAAAAQAAAAEf####8AAAACAAlDQ2VyY2xlT1IAAAAAEwEAAAAAAQAAABUAAAABQDAAAAAAAAABAAAACAAAAAATAAAAFAAAABYAAAAJAAAAABMBAAAAABAAAAEFAAEAAAAXAAAAEAEAAAATAAAAEAAAABH#####AAAAAQAPQ1ZhbGV1ckFmZmljaGVlAQAAABMBAAAAAQAAABgRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAAGQAAABIA#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAEgAAABEAAAATAAAAABsBAAAAABAAAAEAAQAAABIAAAARAAAAFAAAAAAbAQAAAAAQAAABBQAAAAASAAAAEQAAABUAAAAAGwEAAAAAAQAAAB0AAAABQDAAAAAAAAABAAAACAAAAAAbAAAAHAAAAB4AAAAJAAAAABsBAAAAABAAAAEFAAEAAAAfAAAAEAEAAAAbAAAAEgAAABEAAAAWAQAAABsBAAAAAQAAACARAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAAIf####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAKAAAAAUAUAAAAAAAAAAAAAUAqAAAAAAAAAAAAFwD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAAAACgAAAAFAKgAAAAAAAAAAAAFAKgAAAAAAAAAAABcA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAAAoAAAABQBQAAAAAAAAAAAABQBDMzMzMzM0AAAAXAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAKAAAAAUAqAAAAAAAAAAAAAUAQzMzMzMzN#####wAAAAEAB0NDYWxjdWwA#####wACcjEAATgAAAABQCAAAAAAAAAAAAAYAP####8AAnIyAAE4AAAAAUAgAAAAAAAAAAAAGAD#####AAJyMwABOAAAAAFAIAAAAAAAAAAAABgA#####wACcjQAATgAAAABQCAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAjAAAADQMAAAAOAAAAJwAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAkAAAADQMAAAAOAAAAKAAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAlAAAADQMAAAAOAAAAKQAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAmAAAADQMAAAAOAAAAKgAAAAFAAAAAAAAAAAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABP+2jc+MfDgIAAAArAAAAGQD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAT#oCnbou8r7AAAALgAAABkA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAFAA2#XuqaBNQAAACwAAAAZAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABQAUiuM2Ua#MAAAAt#####wAAAAEADUNEZW1pRHJvaXRlT0EA#####wEAAAAAEAAAAQABAAAAMQAAACQAAAAaAP####8BAAAAABAAAAEAAQAAADIAAAAl#####wAAAAEAI0NBdXRyZVBvaW50SW50ZXJzZWN0aW9uRHJvaXRlQ2VyY2xlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAsAAAAMwAAADEAAAAbAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAtAAAANAAAADL#####AAAAAQAIQ1NlZ21lbnQA#####wAAAAAAEAAAAQEBAAAAIwAAAC8AAAAcAP####8AAAAAABAAAAEBAQAAADEAAAA1AAAAHAD#####AAAAAAAQAAABAQEAAAAyAAAANgAAABwA#####wAAAAAAEAAAAQEBAAAAJgAAADAAAAAUAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAjAAAALwAAABQA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAACYAAAAwAAAAFgD#####AAAAAABAEAAAAAAAAEAUAAAAAAAAAAAAOxAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAyBjbQIAAAAnAAAAGAD#####AAJkMgAEMipyMgAAAA0CAAAAAUAAAAAAAAAAAAAADgAAACgAAAAYAP####8AAmQzAAQyKnIzAAAADQIAAAABQAAAAAAAAAAAAAAOAAAAKQAAABYA#####wAAAAAAQBQAAAAAAADALAAAAAAAAAAAACQQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAMgY20CAAAAPgAAABYA#####wAAAAAAQBAAAAAAAADAMQAAAAAAAAAAACUQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAMgY20CAAAAPwAAABYA#####wAAAAAAQBAAAAAAAABAAAAAAAAAAAAAADwQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAJjbQIAAAAqAAAAGQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAUAC6DhJtPdjAAAAKwAAABkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAE#54KANM#JugAAACwAAAAZAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABQAH6z0QhlKUAAAAtAAAAGQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAUABlMNYoHZ0AAAALv####8AAAACAAxDQ29tbWVudGFpcmUA#####wAAAAAAwDUAAAAAAADANwAAAAAAAAAAAEMQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGQyNMKDEpAAAAHQD#####AAAAAABAGAAAAAAAAMAwAAAAAAAAAAAARBAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAZDI0woMikAAAAdAP####8AAAAAAMA3AAAAAAAAwDUAAAAAAAAAAABFEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAABkMjTCgzKQAAAB0A#####wAAAAAAwDgAAAAAAADANQAAAAAAAAAAAEYQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGQyNMKDQpAAAADv##########";
	//	let codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAH0AAAB9AAAAQEAAAAAAAAAAQAAAEv#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AQAAAAAOAAFPAMAoAAAAAAAAAAAAAAAAAAAFAAFACAAAAAAAAEB#UAAAAAAA#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUA8ZmZmZmZmAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAQAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAEAAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQANQ1BvaW50QmFzZUVudAD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAAAoAAAAAAAAAAEAyAAAAAAAAAQEAAAARAP####8BAAAAABAAAUEAAAAAAAAAAABACAAAAAAAAAUAAQAAAAoAAAAAAAAAAEAwAAAAAAAAAQEAAAARAP####8BAAAAABAAAUIAAAAAAAAAAABACAAAAAAAAAUAAQAAAApAMQAAAAAAAEAwAAAAAAAAAQEAAAARAP####8BAAAAABAAAUMAAAAAAAAAAABACAAAAAAAAAUAAQAAAApAMQAAAAAAAAAAAAAAAAAAAQH#####AAAAAQAUQ0ltcGxlbWVudGF0aW9uUHJvdG8A#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAEAAAABH#####AAAAAQALQ01lZGlhdHJpY2UAAAAAEwEAAAAAEAAAAQABAAAAEAAAABH#####AAAAAQAHQ01pbGlldQAAAAATAQAAAAAQAAABBQAAAAAQAAAAEf####8AAAACAAlDQ2VyY2xlT1IAAAAAEwEAAAAAAQAAABUAAAABQDAAAAAAAAABAAAACAAAAAATAAAAFAAAABYAAAAJAAAAABMBAAAAABAAAAEFAAEAAAAXAAAAEAEAAAATAAAAEAAAABH#####AAAAAQAPQ1ZhbGV1ckFmZmljaGVlAQAAABMBAAAAAQAAABgRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAAGQAAABIA#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAEgAAABEAAAATAAAAABsBAAAAABAAAAEAAQAAABIAAAARAAAAFAAAAAAbAQAAAAAQAAABBQAAAAASAAAAEQAAABUAAAAAGwEAAAAAAQAAAB0AAAABQDAAAAAAAAABAAAACAAAAAAbAAAAHAAAAB4AAAAJAAAAABsBAAAAABAAAAEFAAEAAAAfAAAAEAEAAAAbAAAAEgAAABEAAAAWAQAAABsBAAAAAQAAACARAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAAIf####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAKAAAAAUAUAAAAAAAAAAAAAUAqAAAAAAAAAAAAFwD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAAAACgAAAAFAKgAAAAAAAAAAAAFAKgAAAAAAAAAAABcA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAAAoAAAABQBQAAAAAAAAAAAABQBDMzMzMzM0AAAAXAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAKAAAAAUAqAAAAAAAAAAAAAUAQzMzMzMzN#####wAAAAEAB0NDYWxjdWwA#####wACcjEAATgAAAABQCAAAAAAAAAAAAAYAP####8AAnIyAAE4AAAAAUAgAAAAAAAAAAAAGAD#####AAJyMwABOAAAAAFAIAAAAAAAAAAAABgA#####wACcjQAATgAAAABQCAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAjAAAADQMAAAAOAAAAJwAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAkAAAADQMAAAAOAAAAKAAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAlAAAADQMAAAAOAAAAKQAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAmAAAADQMAAAAOAAAAKgAAAAFAAAAAAAAAAAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABP+2jc+MfDgIAAAArAAAAGQD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAT#oCnbou8r7AAAALgAAABkA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAFAA2#XuqaBNQAAACwAAAAZAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABQAUiuM2Ua#MAAAAt#####wAAAAEADUNEZW1pRHJvaXRlT0EA#####wEAAAAADQAAAQABAAAAMQAAACQAAAAaAP####8BAAAAAA0AAAEAAQAAADIAAAAl#####wAAAAEAI0NBdXRyZVBvaW50SW50ZXJzZWN0aW9uRHJvaXRlQ2VyY2xlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAsAAAAMwAAADEAAAAbAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAtAAAANAAAADL#####AAAAAQAIQ1NlZ21lbnQA#####wAAAAAAEAAAAQEBAAAAIwAAAC8AAAAcAP####8AAAAAABAAAAEBAQAAADEAAAA1AAAAHAD#####AAAAAAAQAAABAQEAAAAyAAAANgAAABwA#####wAAAAAAEAAAAQEBAAAAJgAAADAAAAAUAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAjAAAALwAAABQA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAACYAAAAwAAAAFgD#####AAAAAABAEAAAAAAAAEAUAAAAAAAAAAAAOxAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAyBjbQIAAAAnAAAAGAD#####AAJkMgAEMipyMgAAAA0CAAAAAUAAAAAAAAAAAAAADgAAACgAAAAYAP####8AAmQzAAQyKnIzAAAADQIAAAABQAAAAAAAAAAAAAAOAAAAKQAAABYA#####wAAAAAAQBQAAAAAAADALAAAAAAAAAAAACQQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAMgY20CAAAAPgAAABYA#####wAAAAAAQBAAAAAAAADAMQAAAAAAAAAAACUQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAMgY20CAAAAPwAAABYA#####wAAAAAAQBAAAAAAAABAAAAAAAAAAAAAADwQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAJjbQIAAAAqAAAAGQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAUAC6DhJtPdjAAAAKwAAABkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAE#54KANM#JugAAACwAAAAZAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABQAH6z0QhlKUAAAAtAAAAGQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAUABlMNYoHZ0AAAALv####8AAAACAAxDQ29tbWVudGFpcmUA#####wAAAAAAwDAAAAAAAADAMwAAAAAAAAAAAEMQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAPJFxtYXRoY2Fse0N9XzEkAAAAHQD#####AAAAAABAGAAAAAAAAMAwAAAAAAAAAAAARBAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAA8kXG1hdGhjYWx7Q31fMiQAAAAdAP####8AAAAAAMAyAAAAAAAAwDQAAAAAAAAAAABFEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAADyRcbWF0aGNhbHtDfV8zJAAAAB0A#####wAAAAAAwDMAAAAAAADAMAAAAAAAAAAAAEYQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAPJFxtYXRoY2Fse0N9XzQkAAAADv##########";
	//  Si affichage LaTeX alors bug de MG32
		texte_corr=""	
		if (this.sup ==1) { //si on ne demande pas les aires
			texte_corr = `$\\mathcal{P}_1=2\\times${r1}\\times\\pi=${2*r1}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(2*r1*Math.PI),1))}$ cm\\\\`
			texte_corr += `\\\\`
			texte_corr += `\\\\`
			texte_corr += `$\\mathcal{P}_2=${2*r2}\\times\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(2*r2*Math.PI),1))}$ cm\\\\`
			texte_corr += `\\\\`
			texte_corr += `\\\\`
			texte_corr += `$\\mathcal{P}_3=${2*r3}\\times\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(2*r3*Math.PI),1))}$ cm\\\\`
			texte_corr += `\\\\`
			texte_corr += `\\\\`
			texte_corr += `$\\mathcal{P}_4=2\\times${r4}\\times\\pi=${2*r4}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(2*r4*Math.PI),1))}$ cm\\\\`
		}

		
		if (this.sup ==2){
			texte_corr += `$\\mathcal{A}_1=${r1}\\times${r1}\\times\\pi=${r1*r1}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r1*r1*Math.PI),1))}~\\text{cm}^2$\\\\`
			texte_corr += `\\\\`
			texte_corr += `\\\\`
			texte_corr += `Le diamètre de $\\mathcal{C}_2$ est ${2*r2} cm donc son rayon est ${r2} cm.\\\\`
			texte_corr += `\\\\`
			texte_corr += `$\\mathcal{A}_2=${r2}\\times${r2}\\times\\pi=${r2*r2}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r2*r2*Math.PI),1))}~\\text{cm}^2$\\\\`
			texte_corr += `\\\\`
			texte_corr += `\\\\`
			texte_corr += `Le diamètre de $\\mathcal{C}_3$ est ${2*r3} cm donc son rayon est ${r3} cm.\\\\`
			texte_corr += `\\\\`
			texte_corr += `$\\mathcal{A}_3=${r3}\\times${r3}\\times\\pi=${r3*r3}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r3*r3*Math.PI),1))}~\\text{cm}^2$\\\\`
			texte_corr += `\\\\`
			texte_corr += `\\\\`
			texte_corr += `$\\mathcal{A}_4=${r4}\\times${r4}\\times\\pi=${r4*r4}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r4*r4*Math.PI),1))}~\\text{cm}^2$\\\\`
		}

		if (this.sup == 3){
			texte_corr = `$\\mathcal{P}_1=2\\times${r1}\\times\\pi=${2*r1}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(2*r1*Math.PI),1))}$ cm\\\\`
			texte_corr += `\\\\`
			texte_corr += `\\\\`
			texte_corr += `$\\mathcal{P}_2=${2*r2}\\times\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(2*r2*Math.PI),1))}$ cm\\\\`
			texte_corr += `\\\\`
			texte_corr += `\\\\`
			texte_corr += `$\\mathcal{P}_3=${2*r3}\\times\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(2*r3*Math.PI),1))}$ cm\\\\`
			texte_corr += `\\\\`
			texte_corr += `\\\\`
			texte_corr += `$\\mathcal{P}_4=2\\times${r4}\\times\\pi=${2*r4}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(2*r4*Math.PI),1))}$ cm\\\\`
			
			texte_corr += `\\\\`
			texte_corr += `\\\\`
			texte_corr += `\\\\`
			texte_corr += `\\\\`
			
			texte_corr += `$\\mathcal{A}_1=${r1}\\times${r1}\\times\\pi=${r1*r1}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r1*r1*Math.PI),1))}~\\text{cm}^2$\\\\`
			texte_corr += `\\\\`
			texte_corr += `\\\\`
			texte_corr += `Le diamètre de $\\mathcal{C}_2$ est ${2*r2} cm donc son rayon est ${r2} cm.\\\\`
			texte_corr += `\\\\`
			texte_corr += `$\\mathcal{A}_2=${r2}\\times${r2}\\times\\pi=${r2*r2}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r2*r2*Math.PI),1))}~\\text{cm}^2$\\\\`
			texte_corr += `\\\\`
			texte_corr += `\\\\`
			texte_corr += `Le diamètre de $\\mathcal{C}_3$ est ${2*r3} cm donc son rayon est ${r3} cm.\\\\`
			texte_corr += `\\\\`
			texte_corr += `$\\mathcal{A}_3=${r3}\\times${r3}\\times\\pi=${r3*r3}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r3*r3*Math.PI),1))}~\\text{cm}^2$\\\\`
			texte_corr += `\\\\`
			texte_corr += `\\\\`
			texte_corr += `$\\mathcal{A}_4=${r4}\\times${r4}\\times\\pi=${r4*r4}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r4*r4*Math.PI),1))}~\\text{cm}^2$\\\\`
		}
		
		codeMG32 += `
	        var st${numero_de_l_exercice} = "${codeBase64}" ;
	        mtg32App.addDoc("mtg32svg${numero_de_l_exercice}", st${numero_de_l_exercice}, false);
	        mtg32App.giveFormula2("mtg32svg${numero_de_l_exercice}", "r1", "${r1}");
	        mtg32App.giveFormula2("mtg32svg${numero_de_l_exercice}", "r2", "${r2}");
	        mtg32App.giveFormula2("mtg32svg${numero_de_l_exercice}", "r3", "${r3}");
	        mtg32App.giveFormula2("mtg32svg${numero_de_l_exercice}", "r4", "${r4}");
	      ` 	
		
			
		this.liste_corrections.push(texte_corr);
		mg32_to_contenu(this);		
	}

	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,"1 : Périmètres\n\
2 : Aires\n3 : Périmètres et aires"];			
}


function Perimetre_aire_et_portions_de_disques(pa=3){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.pas_de_version_LaTeX = false ;
	this.titre = "Périmètres et aires de portions de cercles"
	this.consigne = "Calculer le périmètre et l'aire de chacune des figures suivantes"
	this.sup = pa ; // 1 : périmètre, 2 : aire, 3 : périmètres et aires
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.type_exercice = 'MG32';
	this.taille_div_MG32 = [600,450];


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_corrections = []; // Liste de questions corrigées
		let r = randint(1,5);
		let r2 = randint(2,4);
		let r3 = randint(2,4);
		let figure = randint(1,2);
		let codeBase64 =""
		if (this.sup==1){
			this.consigne = "Calculer le périmètre de chacune des figures suivantes";
		}
		if (this.sup==2) {
			this.consigne = "Calculer l'aire de chacune des figures suivantes";
		}


		if (figure==1) {
			codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAIoAAACNQAAAQEAAAAAAAAAAQAAAE######AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAHQ0NhbGN1bAD#####AAJyMwABNgAAAAFAGAAAAAAAAP####8AAAABAApDUG9pbnRCYXNlAP####8BAAAAAA4AAVUAwCQAAAAAAABAEAAAAAAAAAUAAEAsZmZmZmZmQCxmZmZmZmb#####AAAAAQAUQ0Ryb2l0ZURpcmVjdGlvbkZpeGUA#####wEAAAAAEAAAAQABAAAAAgE#8AAAAAAAAP####8AAAABAA9DUG9pbnRMaWVEcm9pdGUA#####wEAAAAADgABVgDAAAAAAAAAAEAQAAAAAAAABQABQDxmZmZmZmYAAAAD#####wAAAAEACENTZWdtZW50AP####8BAAAAABAAAAEAAQAAAAIAAAAE#####wAAAAEAB0NNaWxpZXUA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAIAAAAE#####wAAAAIADENDb21tZW50YWlyZQD#####AQAAAAAAAAAAAAAAAEAYAAAAAAAAAAAABgwAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAEx#####wAAAAEACUNMb25ndWV1cgD#####AAAAAgAAAAQAAAADAP####8BAAAAABAAAU8AAAAAAAAAAABACAAAAAAAAAMAAUBRQAAAAAAAQGQAAAAAAAAAAAACAP####8AAXIAATQAAAABQBAAAAAAAAAAAAAEAP####8BAAAAARAAAAEAAQAAAAkBP#AAAAAAAAD#####AAAAAgAJQ0NlcmNsZU9SAP####8BAAAAAAEAAAAJ#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAoA#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAsAAAAM#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAANAAAADQD#####AQAAAAAQAAFBAAAAAAAAAAAAQAgAAAAAAAADAAEAAAAN#####wAAAAEADENBcmNEZUNlcmNsZQD#####AAAAAAABAAAACQAAAA######AAAAAUBWgAAAAAAAAAAABgD#####AAAAAAAQAAABAAEAAAAJAAAAD#####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAAAkAAAARAAAADAD#####AAAAEgAAABAAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABAAAAEwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAATAAAABgD#####AAAAAAAQAAABAAEAAAAVAAAACf####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAgAAAAIAAAAJAAAAD#####8AAAABAAtDTWVkaWF0cmljZQAAAAAXAQAAAAAQAAABAAEAAAAJAAAADwAAAAcAAAAAFwEAAAAAEAAAAQUAAAAACQAAAA8AAAAKAAAAABcBAAAAAAEAAAAZAAAAAUAwAAAAAAAAAQAAAAwAAAAAFwAAABgAAAAaAAAADQAAAAAXAQAAAAAQAAABBQABAAAAGwAAAAkBAAAAFwAAAAkAAAAP#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQEAAAAXAAAAAAEAAAAcEQAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAADIGNtAQAAAB3#####AAAAAQAOQ01hcnF1ZVNlZ21lbnQA#####wAAAP8AAgEAAAAWAAAAEwD#####AAAA#wACAQAAABEAAAACAP####8AAnIyAAE1AAAAAUAUAAAAAAAAAAAACgD#####AQAA#wABAAAACf####8AAAABAApDT3BlcmF0aW9uAAAAABQAAAAACwAAAAoAAAALAAAAIQAAAAFAAAAAAAAAAAAAAAAMAP####8AAAALAAAAIgAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAAjAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAACMAAAAKAP####8BAAAAAAEAAAAlAAAACwAAACEAAAAADAD#####AAAACwAAACYAAAANAP####8BAAAAABAAAUIAAAAAAAAAAABACAAAAAAAAAMAAgAAACcAAAANAP####8BAAAAABAAAUMAAAAAAAAAAABACAAAAAAAAAMAAQAAACcAAAAOAP####8AAAAAAAEAAAAlAAAAKQAAACgAAAAGAP####8AAAAAABAAAAEAAQAAACgAAAApAAAAEAD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAgAAAAIAAAAoAAAAKQAAABEAAAAALAEAAAAAEAAAAQABAAAAKAAAACkAAAAHAAAAACwBAAAAABAAAAEFAAAAACgAAAApAAAACgAAAAAsAQAAAAABAAAALgAAAAFAMAAAAAAAAAEAAAAMAAAAACwAAAAtAAAALwAAAA0AAAAALAEAAAAAEAAAAQUAAQAAADAAAAAJAQAAACwAAAAoAAAAKQAAABIBAAAALAAAAAABAAAAMREAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAAAyAAAABwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAAAACQAAACkAAAAPAP####8BAAAAABAAAAEAAQAAADQAAAArAAAACgD#####AQAAAAABAAAANAAAABQAAAAACwAAAAEAAAABQAAAAAAAAAAAAAAADAD#####AAAANQAAADYAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwACAAAANwAAAA0A#####wEAAAAAEAABRQAAAAAAAAAAAEAIAAAAAAAAAwABAAAANwAAAAQA#####wEAAAABEAAAAQABAAAAOQE#8AAAAAAAAAAAAAoA#####wEAAAAAAQAAADkAAAALAAAAAQAAAAAMAP####8AAAA6AAAAOwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAA8AAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAADwAAAAMAP####8AAAA1AAAAOwAAAA0A#####wEAAAAAEAABRAAAAAAAAAAAAEAIAAAAAAAAAwACAAAAPwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAEAAAA######wAAAAEAEUNHcmFuZEFyY0RlQ2VyY2xlAP####8AAAAAAAEAAAA5AAAAPgAAAEAAAAAGAP####8AAAAAABAAAAEAAQAAAEAAAAA5AAAABgD#####AAAAAAAQAAABAAEAAAA5AAAAPgAAABMA#####wAAAP8AAgIAAABDAAAAEwD#####AAAA#wACAgAAAEQAAAAQAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAACAAAAAgAAAEAAAAA5AAAAEQAAAABHAQAAAAAQAAABAAEAAABAAAAAOQAAAAcAAAAARwEAAAAAEAAAAQUAAAAAQAAAADkAAAAKAAAAAEcBAAAAAAEAAABJAAAAAUAwAAAAAAAAAQAAAAwAAAAARwAAAEgAAABKAAAADQAAAABHAQAAAAAQAAABBQABAAAASwAAAAkBAAAARwAAAEAAAAA5AAAAEgEAAABHAAAAAABARgAAAAAAAAAAAAAAAAAAAAAATBEAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAABNAAAACP##########"
			
			if (this.sup ==1) { //si on ne demande pas les aires
				texte_corr = `La première figure est un quart de disque, son périmètre est composé d'un quart de cercle de rayon ${r} cm et de 2 rayons qui ferment la figure.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{P}_1=\\dfrac{1}{4}\\times2\\times${r}\\times\\pi+${r}+${r}=${tex_nombre(Algebrite.eval(r/2))}\\pi+${2*r}\\approx${tex_nombre(arrondi(Algebrite.eval(r/2*Math.PI+2*r),1))}$ cm\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La deuxième figure est un demi-disque, son périmètre est composé d'un demi-cercle de diamètre ${2*r2} cm et d'un diamètre qui ferme la figure.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{P}_2=\\dfrac{1}{2}\\times${2*r2}\\times\\pi+${2*r2}=${r2}\\pi+${2*r2}\\approx${tex_nombre(arrondi(Algebrite.eval(r2*Math.PI+2*r2),1))}$ cm\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La troisième figure est trois quarts d'un disque, son périmètre est composé de trois quarts d'un cercle de rayon ${r3} cm et 2 rayons qui ferment la figure.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{P}_3=\\dfrac{3}{4}\\times2\\times${r3}\\times\\pi+${r3}+${r3}=${tex_nombre(Algebrite.eval(6*r3/4))}\\pi+${2*r3}\\approx${tex_nombre(arrondi(Algebrite.eval(6*r3/4*Math.PI+2*r3),1))}$ cm\\\\`
			}

			
			if (this.sup ==2){
				texte_corr = `La première figure est un quart de disque de rayon ${r} cm.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{A}_1=\\dfrac{1}{4}\\times${r}\\times${r}\\times\\pi=${tex_nombre(Algebrite.eval(r*r/4))}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r*r/4*Math.PI),1))}~\\text{cm}^2$\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La deuxième figure est la moitié d'un disque de diamètre ${2*r2} cm donc de ${r2} cm de rayon.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{A}_2=\\dfrac{1}{2}\\times${r2}\\times${r2}\\times\\pi=${tex_nombre(Algebrite.eval(r2*r2/2))}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r2*r2/2*Math.PI),1))}~\\text{cm}^2$\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La troisième figure est trois quarts d'un disque de rayon ${r3} cm.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{A}_3=\\dfrac{3}{4}\\times${r3}\\times${r3}\\times\\pi=${tex_nombre(Algebrite.eval(3/4*r3*r3))}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(3/4*r3*r3*Math.PI),1))}~\\text{cm}^2$`
			}

			if (this.sup == 3){
				texte_corr = `La première figure est un quart de disque, son périmètre est composé d'un quart de cercle de rayon ${r} cm et de 2 rayons qui ferment la figure.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{P}_1=\\dfrac{1}{4}\\times2\\times${r}\\times\\pi+${r}+${r}=${tex_nombre(Algebrite.eval(r/2))}\\pi+${2*r}\\approx${tex_nombre(arrondi(Algebrite.eval(r/2*Math.PI+2*r),1))}$ cm\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La deuxième figure est un demi-disque, son périmètre est composé d'un demi-cercle de diamètre ${2*r2} cm et d'un diamètre qui ferme la figure.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{P}_2=\\dfrac{1}{2}\\times${2*r2}\\times\\pi+${2*r2}=${r2}\\pi+${2*r2}\\approx${tex_nombre(arrondi(Algebrite.eval(r2*Math.PI+2*r2),1))}$ cm\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La troisième figure est trois quarts d'un disque, son périmètre est composé de trois quarts d'un cercle de rayon ${r3} cm et 2 rayons qui ferment la figure.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{P}_3=\\dfrac{3}{4}\\times2\\times${r3}\\times\\pi+${r3}+${r3}=${tex_nombre(Algebrite.eval(6*r3/4))}\\pi+${2*r3}\\approx${tex_nombre(arrondi(Algebrite.eval(6*r3/4*Math.PI+2*r3),1))}$ cm\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La première figure est un quart de disque de rayon ${r} cm.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{A}_1=\\dfrac{1}{4}\\times${r}\\times${r}\\times\\pi=${tex_nombre(Algebrite.eval(r*r/4))}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r*r/4*Math.PI),1))}~\\text{cm}^2$\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La deuxième figure est la moitié d'un disque de diamètre ${2*r2} cm donc de ${r2} cm de rayon.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{A}_2=\\dfrac{1}{2}\\times${r2}\\times${r2}\\times\\pi=${tex_nombre(Algebrite.eval(r2*r2/2))}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r2*r2/2*Math.PI),1))}~\\text{cm}^2$\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La troisième figure est trois quarts d'un disque de rayon ${r3} cm.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{A}_3=\\dfrac{3}{4}\\times${r3}\\times${r3}\\times\\pi=${tex_nombre(Algebrite.eval(3/4*r3*r3))}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(3/4*r3*r3*Math.PI),1))}~\\text{cm}^2$`
			}
		}
		else {
			codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAL2AAACOAAAAQEAAAAAAAAAAQAAAGX#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAHQ0NhbGN1bAD#####AAJyMwABNgAAAAFAGAAAAAAAAP####8AAAABAApDUG9pbnRCYXNlAP####8BAAAAAA4AAVUAwCQAAAAAAABAEAAAAAAAAAUAAEAsZmZmZmZmQCxmZmZmZmb#####AAAAAQAUQ0Ryb2l0ZURpcmVjdGlvbkZpeGUA#####wEAAAAAEAAAAQABAAAAAgE#8AAAAAAAAP####8AAAABAA9DUG9pbnRMaWVEcm9pdGUA#####wEAAAAADgABVgDAAAAAAAAAAEAQAAAAAAAABQABQDxmZmZmZmYAAAAD#####wAAAAEACENTZWdtZW50AP####8BAAAAABAAAAEAAQAAAAIAAAAE#####wAAAAEAB0NNaWxpZXUA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAIAAAAE#####wAAAAIADENDb21tZW50YWlyZQD#####AQAAAAAAAAAAAAAAAEAYAAAAAAAAAAAABgwAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAEx#####wAAAAEACUNMb25ndWV1cgD#####AAAAAgAAAAQAAAADAP####8BAAAAABAAAU8AAAAAAAAAAABACAAAAAAAAAMAAUBRQAAAAAAAQGQAAAAAAAAAAAACAP####8AAXIAATQAAAABQBAAAAAAAAAAAAAEAP####8BAAAAARAAAAEAAQAAAAkBP#AAAAAAAAD#####AAAAAgAJQ0NlcmNsZU9SAP####8BAAAAAAEAAAAJ#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAoA#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAsAAAAM#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAANAAAADQD#####AQAAAAAQAAFBAAAAAAAAAAAAQAgAAAAAAAADAAEAAAANAAAABgD#####AAAAAAAQAAABAAEAAAAJAAAAD#####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAAAkAAAAQ#####wAAAAEAFENJbXBsZW1lbnRhdGlvblByb3RvAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAACAAAAAgAAAAkAAAAP#####wAAAAEAC0NNZWRpYXRyaWNlAAAAABIBAAAAABAAAAEAAQAAAAkAAAAPAAAABwAAAAASAQAAAAAQAAABBQAAAAAJAAAADwAAAAoAAAAAEgEAAAAAAQAAABQAAAABQDAAAAAAAAABAAAADAAAAAASAAAAEwAAABUAAAANAAAAABIBAAAAABAAAAEFAAEAAAAWAAAACQEAAAASAAAACQAAAA######AAAAAQAPQ1ZhbGV1ckFmZmljaGVlAQAAABIAAAAAAQAAABcRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAMgY20BAAAAGAAAAAIA#####wACcjIAATQAAAABQBAAAAAAAAAAAAAKAP####8BAAD#AAEAAAAJ#####wAAAAEACkNPcGVyYXRpb24AAAAAEgAAAAALAAAACgAAAAsAAAAaAAAAAUAAAAAAAAAAAAAAAAwA#####wAAAAsAAAAbAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAgAAABwAAAANAP####8BAAAAABAAAUcAAAAAAAAAAABACAAAAAAAAAMAAQAAABwAAAAKAP####8BAAAAAAEAAAAeAAAACwAAABoAAAAADAD#####AAAACwAAAB8AAAANAP####8BAAAAABAAAUIAAAAAAAAAAABACAAAAAAAAAMAAgAAACAAAAANAP####8BAAAAABAAAUMAAAAAAAAAAABACAAAAAAAAAMAAQAAACAAAAAGAP####8BAAAAABAAAAEAAQAAACEAAAAiAAAADwD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAQAAAAIAAAAhAAAAIgAAABAAAAAAJAEAAAAAEAAAAQABAAAAIQAAACIAAAAHAAAAACQBAAAAABAAAAEFAAAAACEAAAAiAAAACgAAAAAkAQAAAAABAAAAJgAAAAFAMAAAAAAAAAEAAAAMAAAAACQAAAAlAAAAJwAAAA0AAAAAJAEAAAAAEAAAAQUAAQAAACgAAAAJAQAAACQAAAAhAAAAIgAAAAcA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAAAkAAAAiAAAADgD#####AQAAAAAQAAABAAEAAAArAAAAIwAAAAoA#####wEAAAAAAQAAACsAAAASAgAAAAE#+AAAAAAAAAAAAAsAAAAaAAAAAAwA#####wAAACwAAAAtAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAgAAAC4AAAANAP####8BAAAAABAAAUUAAAAAAAAAAABACAAAAAAAAAMAAQAAAC4AAAAEAP####8BAAAAARAAAAEAAQAAADABP#AAAAAAAAAAAAAKAP####8BAAAAAAEAAAAwAAAACwAAAAEAAAAADAD#####AAAAMQAAADIAAAANAP####8BAAAAABAAAUkAAAAAAAAAAABACAAAAAAAAAMAAgAAADMAAAANAP####8BAAAAABAAAUgAAAAAAAAAAABACAAAAAAAAAMAAQAAADMAAAAMAP####8AAAAsAAAAMgAAAA0A#####wEAAAAAEAABRAAAAAAAAAAAAEAIAAAAAAAAAwACAAAANgAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAEAAAA2AAAABgD#####AQAAAAAQAAABAAEAAAA3AAAAMAAAAAYA#####wAAAAAAEAAAAQABAAAAMAAAADUAAAAPAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAACAAAAAgAAADcAAAAwAAAAEAAAAAA7AQAAAAAQAAABAAEAAAA3AAAAMAAAAAcAAAAAOwEAAAAAEAAAAQUAAAAANwAAADAAAAAKAAAAADsBAAAAAAEAAAA9AAAAAUAwAAAAAAAAAQAAAAwAAAAAOwAAADwAAAA+AAAADQAAAAA7AQAAAAAQAAABBQABAAAAPwAAAAkBAAAAOwAAADcAAAAwAAAAEQEAAAA7AQAAAABARgAAAAAAAAAAAAAAAAAAAAAAQBEAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAABBAAAADAD#####AAAAEQAAAAwAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQACAAAAQwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAEAAABDAAAABgD#####AAAAAAAQAAABAAEAAAAwAAAANAAAAA4A#####wEAAP8AEAAAAQACAAAAHgAAACMAAAAMAP####8AAABHAAAAHwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAEAAABIAAAADQD#####AQAAAAAQAAFGAAAAAAAAAAAAQAgAAAAAAAADAAIAAABIAAAABgD#####AAAAAAAQAAABAAEAAAAeAAAASgAAAAYA#####wAAAAAAEAAAAQABAAAAHgAAACH#####AAAAAQAMQ0FyY0RlQ2VyY2xlAP####8AAAAAAAEAAAAJAAAADwAAAEQAAAAPAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAACAAAAAgAAAEoAAAAeAAAAEAAAAABOAQAAAAAQAAABAAEAAABKAAAAHgAAAAcAAAAATgEAAAAAEAAAAQUAAAAASgAAAB4AAAAKAAAAAE4BAAAAAAEAAABQAAAAAUAwAAAAAAAAAQAAAAwAAAAATgAAAE8AAABRAAAADQAAAABOAQAAAAAQAAABBQABAAAAUgAAAAkBAAAATgAAAEoAAAAeAAAAEQEAAABOAAAAAADAKgAAAAAAAAAAAAAAAAAAAAAAUxEAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAABUAAAADwD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAgAAAAIAAAA1AAAANAAAABAAAAAAVgEAAAAAEAAAAQABAAAANQAAADQAAAAHAAAAAFYBAAAAABAAAAEFAAAAADUAAAA0AAAACgAAAABWAQAAAAABAAAAWAAAAAFAMAAAAAAAAAEAAAAMAAAAAFYAAABXAAAAWQAAAA0AAAAAVgEAAAAAEAAAAQUAAQAAAFoAAAAJAQAAAFYAAAA1AAAANAAAABEBAAAAVgAAAAAAAAAAAAAAAADACAAAAAAAAAAAAFsRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAMgY20BAAAAXAAAAAYA#####wAAAAAAEAAAAQABAAAACQAAAEQAAAATAP####8AAAAAAAEAAAAwAAAANP####8AAAABQGaAAAAAAAD#####AAAAAQARQ0dyYW5kQXJjRGVDZXJjbGUA#####wAAAAAAAQAAAB4AAAAh#####wAAAAFAcOAAAAAAAP####8AAAABAA5DTWFycXVlU2VnbWVudAD#####AAAA#wACAgAAAF4AAAAVAP####8AAAD#AAICAAAAEAAAABUA#####wAAAP8AAgAAAABLAAAAFQD#####AAAA#wACAAAAAEwAAAAI##########8="
			texte_corr = `La première figure est un quart de cercle de rayon ${r} cm auquel il faut ajouter les 2 rayons qui ferment la figure.\\\\`
			
			if (this.sup==1) {
				texte_corr = `La première figure est un quart de disque, son périmètre est composé d'un quart de cercle de rayon ${r} cm et de 2 rayons qui ferment la figure.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{P}_1=\\dfrac{1}{4}\\times2\\times${r}\\times\\pi+${r}+${r}=${tex_nombre(Algebrite.eval(r/2))}\\pi+${2*r}\\approx${tex_nombre(arrondi(Algebrite.eval(r/2*Math.PI+2*r),1))}$ cm\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La deuxième figure est trois quarts d'un disque, son périmètre est composé de trois quarts d'un cercle de rayon ${r2} cm et 2 rayons qui ferment la figure.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{P}_2=\\dfrac{3}{4}\\times2\\times${r2}\\times\\pi+${r2}+${r2}=${tex_nombre(6/4*r2)}\\pi+${2*r2}\\approx${tex_nombre(arrondi(Algebrite.eval(6/4*r2*Math.PI+2*r2),1))}$ cm\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La troisième figure est un demi-disque, son périmètre est composé d'un demi-cercle de diamètre ${2*r3} cm et d'un diamètre qui ferme la figure.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{P}_3=\\dfrac{1}{2}\\times${2*r3}\\times\\pi+${2*r3}=${r3}\\pi+${2*r3}\\approx${tex_nombre(arrondi(Algebrite.eval(r3*Math.PI+2*r3),1))}$ cm\\\\`
			}

			if (this.sup==2){
				texte_corr = `La première figure est un quart de disque de rayon ${r} cm.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{A}_1=\\dfrac{1}{4}\\times${r}\\times${r}\\times\\pi=${tex_nombre(Algebrite.eval(r*r/4))}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r*r/4*Math.PI),1))}~\\text{cm}^2$\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La deuxième figure est trois quarts d'un disque rayon ${r2} cm.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{A}_2=\\dfrac{3}{4}\\times${r2}\\times${r2}\\times\\pi=${tex_nombre(3/4*r2*r2)}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(3/4*r2*r2*Math.PI),1))}~\\text{cm}^2$\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La troisième figure est un demi-cercle de diamètre ${2*r3} cm donc de rayon ${r3} cm.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{A}_3=\\dfrac{1}{2}\\times${r3}\\times${r3}\\times\\pi=${r3*r3/2}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r3*r3/2*Math.PI),1))}~\\text{cm}^2$\\\\`
			
			}


			if (this.sup==3) {
				texte_corr = `La première figure est un quart de disque, son périmètre est composé d'un quart de cercle de rayon ${r} cm et de 2 rayons qui ferment la figure.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{P}_1=\\dfrac{1}{4}\\times2\\times${r}\\times\\pi+${r}+${r}=${tex_nombre(Algebrite.eval(r/2))}\\pi+${2*r}\\approx${tex_nombre(arrondi(Algebrite.eval(r/2*Math.PI+2*r),1))}$ cm\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La deuxième figure est trois quarts d'un disque, son périmètre est composé de trois quarts d'un cercle de rayon ${r2} cm et 2 rayons qui ferment la figure.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{P}_2=\\dfrac{3}{4}\\times2\\times${r2}\\times\\pi+${r2}+${r2}=${tex_nombre(6/4*r2)}\\pi+${2*r2}\\approx${tex_nombre(arrondi(Algebrite.eval(6/4*r2*Math.PI+2*r2),1))}$ cm\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La troisième figure est un demi-disque, son périmètre est composé d'un demi-cercle de diamètre ${2*r3} cm et d'un diamètre qui ferme la figure.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{P}_3=\\dfrac{1}{2}\\times${2*r3}\\times\\pi+${2*r3}=${r3}\\pi+${2*r3}\\approx${tex_nombre(arrondi(Algebrite.eval(r3*Math.PI+2*r3),1))}$ cm\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La première figure est un quart de disque de rayon ${r} cm.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{A}_1=\\dfrac{1}{4}\\times${r}\\times${r}\\times\\pi=${tex_nombre(Algebrite.eval(r*r/4))}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r*r/4*Math.PI),1))}~\\text{cm}^2$\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La deuxième figure est trois quarts d'un disque rayon ${r2} cm.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{A}_2=\\dfrac{3}{4}\\times${r2}\\times${r2}\\times\\pi=${tex_nombre(3/4*r2*r2)}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(3/4*r2*r2*Math.PI),1))}~\\text{cm}^2$\\\\`
				texte_corr += `\\\\`
				texte_corr += `\\\\`
				texte_corr += `La troisième figure est un demi-cercle de diamètre ${2*r3} cm donc de rayon ${r3} cm.\\\\`
				texte_corr += `\\\\`
				texte_corr += `$\\mathcal{A}_3=\\dfrac{1}{2}\\times${r3}\\times${r3}\\times\\pi=${r3*r3/2}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r3*r3/2*Math.PI),1))}~\\text{cm}^2$\\\\`
			}





			
		}
		
		
		codeMG32 += `
	        var st${numero_de_l_exercice} = "${codeBase64}" ;
	        mtg32App.addDoc("mtg32svg${numero_de_l_exercice}", st${numero_de_l_exercice}, false);
	        mtg32App.giveFormula2("mtg32svg${numero_de_l_exercice}", "r", "${r}");
	        mtg32App.giveFormula2("mtg32svg${numero_de_l_exercice}", "r2", "${r2}");
	        mtg32App.giveFormula2("mtg32svg${numero_de_l_exercice}", "r3", "${r3}");
	      ` 	
		
			
		this.liste_corrections.push(texte_corr);
		mg32_to_contenu(this);		
	}

	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,"1 : Périmètres\n\
2 : Aires\n3 : Périmètres et aires"];			
}

function Exercice_differentes_ecritures_nombres_decimaux(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Différentes écritures des nombres décimaux"
	this.consigne = "Compléter."
	this.spacing = 2;
	this.spacing_corr = 2;

	this.nouvelle_version = function(){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3,4,5,6]
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		
		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			type_de_questions = liste_type_de_questions[i];
			let u = randint(2,9); //chiffre des unités
			let d = randint(1,9); //chiffre des dixièmes
			let c = randint(1,9); //chiffre des centièmes
			let n = 100*u+10*d+c
			switch (type_de_questions){
				case 1 : // n/100 = .../10 + .../100
					texte = `$${tex_fraction(n,'100')}=\\ldots\\ldots+${tex_fraction('',10)}+${tex_fraction('',100)}$`;
					texte_corr = `$${tex_fraction(n,'100')}=${u}+${tex_fraction(d,'10')}+${tex_fraction(c,'100')}$`;
					break ;
				case 2 : // n/100 = .../100 + .../10
					texte = `$${tex_fraction(n,'100')}=\\ldots\\ldots+${tex_fraction('',100)}+${tex_fraction('',10)}$`;
					texte_corr = `$${tex_fraction(n,'100')}=${u}+${tex_fraction(c,100)}+${tex_fraction(d,10)}$`;
					break ;
				case 3 : // .../100 = u+ d/10 + c/100
					texte = `$${tex_fraction('','100')}=${u}+${tex_fraction(d,'10')}+${tex_fraction(c,'100')}$`;
					texte_corr = `$${tex_fraction(n,'100')}=${u}+${tex_fraction(d,'10')}+${tex_fraction(c,'100')}$`;
					break ;
				case 4 : // u = .../10
					texte = `$${u}=${tex_fraction('','10')}$`;
					texte_corr = `$${u}=${tex_fraction(10*u,'10')}$`;
					break ;
				case 5 : // u = .../100
					texte = `$${u}=${tex_fraction('','100')}$`;
					texte_corr = `$${u}=${tex_fraction(100*u,'10')}$`;
					break ;
				case 6 : // n/10 = ... + .../10 + .../100
					texte = `$${tex_fraction(n,10)}=\\ldots\\ldots+${tex_fraction('',10)}+${tex_fraction('',100)}$`;
					texte_corr = `$${tex_fraction(n,10)}=${u*10+d}+${tex_fraction(c,10)}+${tex_fraction(0,100)}$`;
					break ;
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',2,'1 : Multiplication par un facteur positif\n2: Multiplication par un facteur relatif'] 
}




function Code_LaTeX_personnalise() {
	// Classe parente de tous les exercices qui seront créés
    this.titre = 'Code LaTeX personnalisé';
    this.pas_de_version_HMTL = true ;
    this.consigne = '';
    this.consigne_correction = '';
    this.liste_questions = [];
    this.liste_corrections = [];
    this.contenu = '';
    this.contenu_correction = '';
    this.nb_questions = 10;
    this.nb_cols = 2;
    this.nb_cols_corr = 2;
    this.spacing = 1;
    this.spacing_corr = 1;
    this.beamer = false;
    this.sup = '%Votre code LaTeX'
    this.sup2 = '%Votre code LaTeX pour le corrigé'

    this.consigne_modifiable = false;
   	this.nb_questions_modifiable = false;
   	this.nb_cols_modifiable = false;
   	this.nb_cols_corr_modifiable = false;
   	this.spacing_modifiable = false;
   	this.spacing_corr_modifiable = false;

   	this.besoin_formulaire_numerique = false; // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];
   	this.besoin_formulaire_texte = ['Code LaTeX énoncé','Par exemple : \\input{mon_fichier}']; // Sinon this.besoin_formulaire_texte = [texte,tooltip];
   	this.besoin_formulaire2_texte = ['Code LaTeX correction','Par exemple : \\input{mon_fichier_corr}'];
   	this.besoin_formulaire_case_a_cocher = false; // Sinon this.besoin_formulaire_case_a_cocher = [texte];
   	
   	this.nouvelle_version = function(){
   		   	this.contenu = this.sup
   		   	this.contenu_correction = this.sup2
   	}

}

function HTML_personnalise() {
	// Classe parente de tous les exercices qui seront créés
    this.titre = 'Exercice personnalisé';
    this.pas_de_version_HMTL = false ;
    this.pas_de_version_LaTeX = true ;
    this.consigne = '';
    this.consigne_correction = '';
    this.liste_questions = [];
    this.liste_corrections = [];
    this.contenu = '';
    this.contenu_correction = '';
    this.nb_questions = 10;
    this.nb_cols = 2;
    this.nb_cols_corr = 2;
    this.spacing = 1;
    this.spacing_corr = 1;
    this.beamer = false;
    this.sup = "Énoncé de l'exercice"
    this.sup2 = "Énoncé de la correction"

    this.consigne_modifiable = false;
   	this.nb_questions_modifiable = false;
   	this.nb_cols_modifiable = false;
   	this.nb_cols_corr_modifiable = false;
   	this.spacing_modifiable = false;
   	this.spacing_corr_modifiable = false;

   	this.besoin_formulaire_numerique = false; // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];
   	this.besoin_formulaire_long_texte = ['Exercice']; // Sinon this.besoin_formulaire_texte = [texte,tooltip];
   	this.besoin_formulaire2_texte = ['Correction'];
   	this.besoin_formulaire_case_a_cocher = false; // Sinon this.besoin_formulaire_case_a_cocher = [texte];
   	
   	this.nouvelle_version = function(){
   		   	this.contenu = this.sup
   		   	this.contenu_correction = this.sup2
   	}

}


// Exercices paramétré pour correspondre au référentiel

function Exercice_6N12(){
	Exercice_tables_de_multiplications_et_multiples_de_10.call(this);
	this.sup = [1];
	this.titre = 'Multiplier un entier par 10, 100, 1 000...';
}

function Exercice_6N13(){
	Exercice_conversions.call(this);
	this.sup = 1;
	this.titre = 'Utiliser les préfixes multiplicateurs (déca à kilo)';
}

function Exercice_6N24(){
	Exercice_conversions.call(this);
	this.sup = 3;
	this.titre = 'Utiliser les préfixes multiplicateurs et diviseurs (milli à kilo)';
	this.correction_avec_des_fractions = true;
	this.spacing_corr = 2;
}

function Reglages_6M12(){
	Exercice_conversions_de_longueurs.call(this);
	this.sup = 3;
}

function Reglages_6M23(){
	Exercice_conversions_aires.call(this);
	this.sup = 3;
}

function Reglages_6M10(){
	Exercice_perimetres_et_aires.call(this);
	this.sup = 1;
}

function Reglages_6M22(){
	Exercice_perimetres_et_aires.call(this);
	this.sup = 2;
	this.titre = "Périmètres et aires de disques (à partir d'un texte)."
}









jQuery(document).ready(function() {
// Ne se fait qu'après que le DOM soit entièrement défini

	// Trie par ordre alphabétique les exercices disponibles
	liste_des_exercices_disponibles = tridictionnaire(liste_des_exercices_disponibles);
	// Affiche la liste des exercices
	let liste_html_des_exercices = '<h3 class="ui block header">Exercices disponibles</h3>\n<ol>\n';
	for (var id in liste_des_exercices_disponibles) {
		let exercice_tmp = new liste_des_exercices_disponibles[id];
		liste_html_des_exercices += '<span class="id_exercice">' + id + '</span> - <a class="lien_id_exercice" numero="' + id + '">'  + exercice_tmp.titre + '</a></br>\n';
	}
	//liste_html_des_exercices += '</ol>'
	$('#liste_des_exercices').html(liste_html_des_exercices);


	// Gère le clic sur un exercice de la liste
	$('.lien_id_exercice').click(function(){
		let numero=$(this).attr('numero');
		if ($('#choix_des_exercices').val()=='') {
			$('#choix_des_exercices').val($('#choix_des_exercices').val() + numero);	
		} else {
			$('#choix_des_exercices').val($('#choix_des_exercices').val() + ',' + numero);
		}
		liste_des_exercices = $('#choix_des_exercices').val().replace(/\s/g, "").replace(";", ",").split(",");;
		mise_a_jour_de_la_liste_d_exercice();

});






});


