# Rapport technique (LaTeX)

Rapport technique du détecteur de similarité entre codes sources, en
**trois pages maximum**, couvrant :

1. la stratégie et les algorithmes utilisés ;
2. les choix de conception et les structures de données ;
3. les optimisations réalisées ;
4. les résultats des tests ;
5. les limites de la solution.

## Fichiers

- `rapport.tex` — source LaTeX (document principal) ;
- `rapport.pdf` — version compilée ;
- `figures/scores_moyens.png` — graphique d'évaluation (repris de
  `evaluation/figures/`).

## Compilation

Depuis ce dossier :

```bash
pdflatex rapport.tex
pdflatex rapport.tex   # seconde passe (références / figure)
```

Sous Windows, si `pdflatex` n'est pas dans le `PATH` (MiKTeX) :

```powershell
& "C:\Users\<utilisateur>\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe" rapport.tex
```

> Les données chiffrées du rapport proviennent de `evaluation/resultats.csv`
> (24 scénarios étiquetés, trois niveaux). Pour les régénérer :
> `python -m evaluation.run_evaluation --csv evaluation/resultats.csv --plots`
