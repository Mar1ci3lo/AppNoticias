export interface NewsResponse{
    status:         string;
    totalResult:    number;
    articles:       Article[];
}

export interface Article{
    source:         Source;
    author?:        string;
    tittle:         string;
    description?:   string;
    url:            string;
    urlToImage?:    string;
    publishedAt:    string;
    content?:        string;
}

export interface Source{
    id?:            string;
    name:           string; 
}