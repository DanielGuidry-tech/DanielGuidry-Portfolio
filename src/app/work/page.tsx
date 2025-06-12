import { Column, Flex, Heading, SmartImage, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`${baseURL}/og?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
        {about.work.display && (
        <>
          <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
            {about.work.title}
          </Heading>
          <Column fillWidth gap="l" marginBottom="40">
            {about.work.experiences.map((experience, index) => (
              <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                  <Text id={experience.company} variant="heading-strong-l">
                    {experience.company}
                  </Text>
                  <Text variant="heading-default-xs" onBackground="neutral-weak">
                    {experience.timeframe}
                  </Text>
                </Flex>
                <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                  {experience.role}
                </Text>
                <Column as="ul">
                  {experience.achievements.map((achievement: JSX.Element, index: number) => (
                    <Text
                      as="li"
                      variant="body-default-m"
                      key={`${experience.company}-${index}`}
                    >
                      {achievement}
                    </Text>
                  ))}
                </Column>
                {experience.images.length > 0 && (
                  <Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
                    {experience.images.map((image, index) => (
                      <Flex
                        key={index}
                        border="neutral-medium"
                        radius="m"
                        //@ts-ignore
                        minWidth={image.width}
                        //@ts-ignore
                        height={image.height}
                      >
                        <SmartImage
                          enlarge
                          radius="m"
                          //@ts-ignore
                          sizes={image.width.toString()}
                          //@ts-ignore
                          alt={image.alt}
                          //@ts-ignore
                          src={image.src}
                        />
                      </Flex>
                    ))}
                  </Flex>
                )}
              </Column>
            ))}
          </Column>
        </>
      )}

      
      {about.studies.display && (
        <>
          <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
            {about.studies.title}
          </Heading>
          <Column fillWidth gap="l" marginBottom="40">
            {about.studies.institutions.map((institution, index) => (
              <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                <Text id={institution.name} variant="heading-strong-l">
                  {institution.name}
                </Text>
                <Text variant="heading-default-xs" onBackground="neutral-weak">
                  {institution.description}
                </Text>
              </Column>
            ))}
          </Column>
        </>
      )}
    </Column>
  );
}
