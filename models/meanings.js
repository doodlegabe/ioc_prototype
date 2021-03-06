import uuid from 'uuid';
import Meaning from './neo4j_models/meaning';
const IoCSeed = require('../ioc.seed');

const matchClassifications = function(classes){
    if(!classes || !classes.length){
        return 'none';
    }else{
        const schemas = [];
        for(let i in IoCSeed.suggestionData){
            if (IoCSeed.suggestionData.hasOwnProperty(i)) {
                schemas.push(i.toString().toLowerCase());
            }
        }
        for(let c=0; c<classes.length; c++){
            let l = classes[c].label;
            if(schemas.indexOf(l)!==-1){
                return l;
            }
        }
    }
};

const extractFromTag = function (session, tagId, ontology) {
    const meanings = [];
    for(let i=0; i<ontology.results.length; i++){
        let meaning ={
            id: uuid.v4(),
            label: ontology.results[i].label,
            description: ontology.results[i].description,
            sourceURI: ontology.results[i].sourceURI,
            schemaName: matchClassifications(ontology.results[i].classes),
            lastUpdate: 'new'
        };
        meanings.push(meaning);
    }
    return session.run('UNWIND {meanings} AS map MATCH(tag:Tag {id:{tagId}}) CREATE (m:Meaning)-[:DERIVED_FROM]->(tag) SET m=map ', { meanings:meanings, tagId:tagId })
        .then(results => {
            if(results.records) {
                return session.run('MATCH(tag:Tag {id:{tagId}}) MATCH( (m:Meaning)-[:DERIVED_FROM]->(tag)) RETURN m', {tagId: tagId}
                ).then(results => {
                    return new Meaning(results.records[0].get('m'));
                    }
                )
            }
        }
    )
};

const update = function (session) {

};

const deletion = function (session) {

};

const retrieve = function (session, suggestionId) {
    return session.run('MATCH(s:Suggestion {id:{suggestionId}}) MATCH ((s)<-[:CAME_FROM_THIS_MEANING]-(m:Meaning)) RETURN m', { suggestionId:suggestionId }
    ).then(results => {
        return new Meaning(results.records[0].get('m'));
    })
};

module.exports = {
    extractFromTag:extractFromTag,
    update: update,
    deletion: deletion,
    retrieve:retrieve
};