import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer"

import { CONTENT_BASE, NAME, SECTION_TITLES } from "../constants.ts"
import type {
  AboutMeData,
  ContactData,
  EducationItem,
  ExperienceItem,
  LanguageItem,
} from "../types.ts"

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10.5,
    fontFamily: "Helvetica",
    lineHeight: 1.6,
    backgroundColor: "#ffffff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
    borderBottom: "1 solid #e5e7eb",
    paddingBottom: 8,
  },
  section: {
    marginBottom: 4,
  },
  itemTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  periodStyle: {
    fontSize: 10,
    color: "#909090",
  },
})

interface PDFDocumentProps {
  aboutMe: AboutMeData | null
  experiences: ExperienceItem[]
  educations: EducationItem[]
  languages: LanguageItem[]
  contacts: ContactData | null
}

const PDFDocument: React.FC<PDFDocumentProps> = ({
  aboutMe,
  experiences,
  educations,
  languages,
  contacts,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 50,
          gap: 16,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            src={`${CONTENT_BASE}profile_picture.png`}
            style={{
              width: 200,
              height: 200,
              borderRadius: 50,
              objectFit: "cover",
              marginBottom: 8,
            }}
          />
          {contacts?.email && (
            <Text style={{ fontSize: 10, color: "#1f2937" }}>
              {contacts.email}
            </Text>
          )}
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ marginBottom: 15, fontSize: 24, fontWeight: "bold" }}>
            {NAME}
          </Text>
          <Text style={{ marginBottom: 15, fontSize: 16, fontWeight: "bold" }}>
            {aboutMe?.role}
          </Text>
          <Text>{aboutMe?.description}</Text>
        </View>
      </View>

      {/* Experiences */}
      {experiences?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{SECTION_TITLES.experiences}</Text>
          {experiences.map((exp, idx) => (
            <View key={idx} style={{ marginBottom: 20 }} wrap={false}>
              <Text style={styles.itemTitle}>{exp.workTitle}</Text>
              <Text>{exp.workplace}</Text>
              <Text style={styles.periodStyle}>
                {exp.fromTime} – {exp.toTime}
              </Text>
              <Text>{exp.description}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Educations */}
      {educations?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{SECTION_TITLES.educations}</Text>
          {educations.map((edu, idx) => (
            <View key={idx} style={{ marginBottom: 20 }} wrap={false}>
              <Text style={styles.itemTitle}>{edu.name}</Text>
              <Text style={styles.periodStyle}>{edu.education}</Text>
              <Text style={styles.periodStyle}>
                {edu.fromTime} – {edu.toTime}
              </Text>
              <Text>{edu.description}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Languages */}
      {languages?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{SECTION_TITLES.languages}</Text>
          {languages.map((lang, idx) => (
            <View key={idx} style={{ marginBottom: 12 }} wrap={false}>
              <Text style={styles.itemTitle}>{lang.language}</Text>

              <View
                style={{
                  width: 180,
                  height: 6,
                  backgroundColor: "#d1d5db",
                  borderRadius: 3,
                  overflow: "hidden",
                  marginBottom: 4,
                }}
              >
                <View
                  style={{
                    height: 6,
                    width: `${(lang.level / 10) * 100}%`,
                    backgroundColor: "#f59e0b",
                    borderRadius: 3,
                  }}
                />
              </View>

              <Text style={styles.periodStyle}>
                Proficiency: {lang.level} / 10
              </Text>
            </View>
          ))}
        </View>
      )}
    </Page>
  </Document>
)

export default PDFDocument
