import React, { useState, useEffect } from 'react';

const TrainRouteFinder = () => {
    // Input Data
    const startingCity = 'Kiev';
    const visitedCities = ['Amsterdam', 'Kiev', 'Zurich', 'Prague', 'Berlin', 'Barcelona'];
    const tickets = [
        ['Paris', 'Skopje'],
        ['Zurich', 'Amsterdam'],
        ['Prague', 'Zurich'],
        ['Barcelona', 'Berlin'],
        ['Kiev', 'Prague'],
        ['Skopje', 'Paris'],
        ['Amsterdam', 'Barcelona'],
        ['Berlin', 'Kiev'],
        ['Berlin', 'Amsterdam']
    ];

    const [route, setRoute] = useState([]);

    const buildGraph = (tickets) => {
        const graph = {};
        tickets.forEach(([from, to]) => {
            if (!graph[from]) {
                graph[from] = [];
            }
            graph[from].push(to);
        });
        return graph;
    };

    const findRoute = (graph, start, visited) => {
        const route = [];
        const visitedSet = new Set();

        const dfs = (city) => {
            route.push(city);
            visitedSet.add(city);

            if (route.length === visited.length) return true;

            if (graph[city]) {
                for (let nextCity of graph[city].sort()) {
                    if (!visitedSet.has(nextCity) && visited.includes(nextCity)) {
                        if (dfs(nextCity)) return true;
                    }
                }
            }

            route.pop(); 
            visitedSet.delete(city);
            return false;
        };

        dfs(start);
        return route;
    };

    useEffect(() => {
        const graph = buildGraph(tickets);
        const route = findRoute(graph, startingCity, visitedCities);
        setRoute(route);
    }, []);

    return (
        <div>
            <h1><strong>Assignment 2</strong></h1>
        <div>
            <h1>Train Route Finder</h1>
            <p><strong>Starting City:</strong> {startingCity}</p>
            <p><strong>Cities Visited:</strong> {visitedCities.join(', ')}</p>
            <p><strong>Route Found:</strong> {route.length > 0 ? route.join(' → ') : 'Route not found'}</p>
        </div>
        </div>
    );
};

export default TrainRouteFinder;
