edges: dict[str, list[str]] = {
    "a": ["c", "b"],
    "b": ["d", "e"],
    "c": [],
    "d": [],
    "e": [],
}
vertices: list[str] = ["a", "b", "c", "d", "e"]


def topological_sort(start: str, visited: list[str], sort: list[str]) -> list[str]:
    current = start
    visited.append(current)
    neighbors = edges[current]
    for neighbor in neighbors:
        if neighbor not in visited:
            sort = topological_sort(neighbor, visited, sort)
    sort.append(current)
    if len(visited) != len(vertices):
        for vertice in vertices:
            if vertice not in visited:
                sort = topological_sort(vertice, visited, sort)
    return sort


if __name__ == "__main__":
    sort = topological_sort("a", [], [])
    print(sort)
