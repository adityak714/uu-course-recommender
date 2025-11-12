import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Search, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import coursesData from "@/data/courses.json";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedFaculties, setSelectedFaculties] = useState<string[]>([]);
  const [selectedTeachingForms, setSelectedTeachingForms] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(true);

  const levels = [...new Set(coursesData.map((c) => c.level))];
  const faculties = [...new Set(coursesData.map((c) => c.faculty))];
  const teachingForms = [...new Set(coursesData.map((c) => c.teaching_form))];

  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesSearch =
        searchQuery === "" ||
        course.course_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase())) ||
        course.faculty.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLevel =
        selectedLevels.length === 0 || selectedLevels.includes(course.level);

      const matchesFaculty =
        selectedFaculties.length === 0 || selectedFaculties.includes(course.faculty);

      const matchesTeachingForm =
        selectedTeachingForms.length === 0 ||
        selectedTeachingForms.includes(course.teaching_form);

      return matchesSearch && matchesLevel && matchesFaculty && matchesTeachingForm;
    });
  }, [searchQuery, selectedLevels, selectedFaculties, selectedTeachingForms]);

  const toggleFilter = (value: string, selectedValues: string[], setSelectedValues: (values: string[]) => void) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((v) => v !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">All Courses</h1>

        <div className="mb-6">
          <div className="flex gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search courses, keywords, or faculty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredCourses.length} of {coursesData.length} courses
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedLevels([]);
                setSelectedFaculties([]);
                setSelectedTeachingForms([]);
                setSearchQuery("");
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {showFilters && (
            <aside className="w-full md:w-64 space-y-6">
              <Card className="p-4">
                <h3 className="font-semibold mb-3">Level</h3>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <div key={level} className="flex items-center space-x-2">
                      <Checkbox
                        id={`level-${level}`}
                        checked={selectedLevels.includes(level)}
                        onCheckedChange={() =>
                          toggleFilter(level, selectedLevels, setSelectedLevels)
                        }
                      />
                      <label
                        htmlFor={`level-${level}`}
                        className="text-sm cursor-pointer"
                      >
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-3">Faculty</h3>
                <div className="space-y-2">
                  {faculties.map((faculty) => (
                    <div key={faculty} className="flex items-center space-x-2">
                      <Checkbox
                        id={`faculty-${faculty}`}
                        checked={selectedFaculties.includes(faculty)}
                        onCheckedChange={() =>
                          toggleFilter(faculty, selectedFaculties, setSelectedFaculties)
                        }
                      />
                      <label
                        htmlFor={`faculty-${faculty}`}
                        className="text-sm cursor-pointer"
                      >
                        {faculty.replace("Faculty of ", "")}
                      </label>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-4">
                <h3 className="font-semibold mb-3">Teaching Form</h3>
                <div className="space-y-2">
                  {teachingForms.map((form) => (
                    <div key={form} className="flex items-center space-x-2">
                      <Checkbox
                        id={`form-${form}`}
                        checked={selectedTeachingForms.includes(form)}
                        onCheckedChange={() =>
                          toggleFilter(form, selectedTeachingForms, setSelectedTeachingForms)
                        }
                      />
                      <label
                        htmlFor={`form-${form}`}
                        className="text-sm cursor-pointer"
                      >
                        {form}
                      </label>
                    </div>
                  ))}
                </div>
              </Card>
            </aside>
          )}

          <div className="flex-1">
            {filteredCourses.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-muted-foreground">
                  No courses found matching your criteria. Try adjusting your filters.
                </p>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
