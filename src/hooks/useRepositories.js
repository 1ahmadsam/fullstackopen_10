import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();
  //const [loading, setLoading] = useState(false);
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });

  const fetchRepositories = async () => {
    if (loading === false && data) {
      console.log("data:", data);
      setRepositories(data.repositories);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, [loading, data]);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;

/**
 * ownerAvatarUrl
 * name
 * id
 * stargazersCount
 * forksCount
 * reviewCount
 * ratingAverage
 * description
 */
