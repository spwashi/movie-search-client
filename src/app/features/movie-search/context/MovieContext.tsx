import {createContext, useContext} from 'react';
import {MovieData} from '../query/MovieApiQuery';

export const MovieContext    = createContext<MovieData>({
                                                          actors:     [],
                                                          awards:     '',
                                                          boxOffice:  '',
                                                          directors:  [],
                                                          dvd:        0,
                                                          genres:     [],
                                                          imdbID:     '',
                                                          imdbRating: 0,
                                                          imdbVotes:  0,
                                                          country:    [],
                                                          language:   [],
                                                          metascore:  0,
                                                          plot:       '',
                                                          poster:     '',
                                                          rated:      '',
                                                          ratings:    [{source: '', value: 0}],
                                                          released:   '',
                                                          runtime:    '',
                                                          title:      '',
                                                          type:       '',
                                                          writers:    [],
                                                          year:       0,
                                                        });
export const useMovieContext = () => useContext(MovieContext);
export function MovieContextProvider({data, children}: { data: MovieData; children?: any }) {
  return <MovieContext.Provider value={data}>
    {children}
  </MovieContext.Provider>
}