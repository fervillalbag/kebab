import { useNavigate } from "react-router-dom";
import { Button, Flex, Image } from "@chakra-ui/react";

import { Text } from "@/ui";
import { useEffect } from "react";

export default function BackButton({ title }: { title: string }) {
  const navigate = useNavigate();

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <Flex alignItems="center" p="20px">
      <Button
        rounded="2px"
        w="45px"
        h="45px"
        bgColor="suvap.lightGray"
        p="0"
        onClick={() => navigate(-1)}
      >
        <Image src="/icons/arrow-left.svg" alt="" />
      </Button>
      <Text ml="15px" color="suvap.darkGray" fontSize="18px">
        {title}
      </Text>
    </Flex>
  );
}
