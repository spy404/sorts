from __future__ import annotations

import re


def natural_sort(input_list: list[str]) -> list[str]:
    def alphanum_key(key):
        return [int(s) if s.isdigit() else s.lower() for s in re.split("([0-9]+)", key)]

    return sorted(input_list, key=alphanum_key)


if __name__ == "__main__":
    import doctest

    doctest.testmod()
