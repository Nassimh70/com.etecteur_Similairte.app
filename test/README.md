# Jeu de comparaison

Ce dossier contient des fichiers volontairement comparables :

- `python/` : deux versions Python du tri à bulles ;
- `javascript/` : deux versions JavaScript du tri à bulles ;
- `cross_language/` : des algorithmes équivalents en Python, JavaScript, C
  et Java.

Exemples depuis la racine du projet :

```bash
python cli.py --ref test/python/bubble_sort.py \
  --cands test/python/bubble_sort_variant.py --level auto

python cli.py --ref test/cross_language/fibonacci.py \
  --cands test/cross_language/fibonacci.js test/cross_language/fibonacci.c \
  --level auto
```
